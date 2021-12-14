import React, {useState, useMemo, useEffect} from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import {Popup} from 'react-map-gl';

import BaseMapList from '@geomatico/geocomponents/BaseMapList';
import MapLegend from '@geomatico/geocomponents/MapLegend';
import ResponsiveHeader from '@geomatico/geocomponents/ResponsiveHeader';
import SidePanel from '@geomatico/geocomponents/SidePanel';
import Map from '@geomatico/geocomponents/Map';

import {useDispatch, useSelector} from 'react-redux';
import { getFeatures } from '../modules/api/selectors';

import {apiGetFeatures} from '../modules/api/actions';

import {LEGEND, MAPSTYLES, WIDESCREEN_STEP, INITIAL_VIEWPORT, DRAWER_WIDTH, INITIAL_MAPSTYLE_URL, LAYERS} from '../config';

import SectionTitle from '../components/SectionTitle';
import styled from '@mui/styles/styled';
import PopupInfo from '../components/PopupInfo';

const MapContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'leftDrawer'
})(({theme, leftDrawer}) => ({
  flexGrow: 1,
  padding: 0,
  position: 'absolute',
  top: theme.mixins.toolbar.minHeight,
  bottom: 0,
  right: 0,
  left: leftDrawer ? DRAWER_WIDTH : 0
}));

const CustomPopup = styled(Popup)({
  '& .mapboxgl-popup-content': {
    padding: 0
  }
});

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(getFeatures);
  const sources = useMemo (() => ({
    data: {
      type: 'geojson',
      data: data
    },
    quartieri: {
      type: 'geojson',
      data: 'carto/quartieri-roma.geojson'
    }
  })
  );
  useEffect(() => {
    dispatch(apiGetFeatures());
  }, []);
  const widescreen = useMediaQuery(`(min-width: ${WIDESCREEN_STEP})`, {noSsr: true});
  const [selectedStyleUrl, setSelectedStyleUrl] = useState(INITIAL_MAPSTYLE_URL);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
  const [featureClicked, setFeatureClicked] = useState(undefined);

  const layers = useMemo (() => LAYERS, []);
  const onViewportChange = (viewport) =>
    setViewport({
      ...viewport
    });
  const handleClose = () => setIsSidePanelOpen(!isSidePanelOpen);
  const handleOnClick = (e) => setFeatureClicked(e.features && e.features[0]);
  return (
    <>
      <ResponsiveHeader
        onStartIconClick={widescreen ? undefined : handleClose}
        title='ROMA CITÁ APERTA'
      >
      </ResponsiveHeader>
      <SidePanel
        drawerWidth={DRAWER_WIDTH}
        anchor="left"
        isOpen={isSidePanelOpen}
        onClose={handleClose}
        widescreen={widescreen}
      >
        <div>
          <Box mb={2}>
            <SectionTitle titleKey="Estilo Mapa Base"/>
            <BaseMapList
              styles={MAPSTYLES}
              selectedStyleUrl={selectedStyleUrl}
              onStyleChange={(basemap) => setSelectedStyleUrl(basemap)}
              typographyStyleProps={{fontSize: 14}}
            />
          </Box>
          <Box mb={2}>
            <SectionTitle titleKey="Leyenda"/>
            <MapLegend fields={LEGEND}
              sx={{
                '& .MapLegend-swatch': {
                  margin: '0px 8px 0px 0px',
                  width: 20,
                },
                '& .MapLegend-text': {
                  fontSize: 14
                }}
              }
            />
          </Box>
        </div>
      </SidePanel>
      <MapContent leftDrawer={isSidePanelOpen && widescreen}>
        <Map
          mapStyle={selectedStyleUrl}
          viewport={viewport}
          onViewportChange={onViewportChange}
          sources={sources}
          layers={layers}
          interactiveLayerIds={layers.map(({id}) => id)}
          onClick={handleOnClick}
          // mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN} // Token necesario para ver datos de mapbox o usar mapbox-gl-js v2 (react-map-gl 6)
        >
          {featureClicked &&
            <CustomPopup
              longitude={featureClicked.geometry.coordinates[0]}
              latitude={featureClicked.geometry.coordinates[1]}
              anchor="bottom"
              closeButton={false}
            >
              <PopupInfo
                name={featureClicked.properties.name}
                style={featureClicked.properties.style}
                author={featureClicked.properties.author}
                description={featureClicked.properties.description}
                price={featureClicked.properties.price}
                other={featureClicked.properties.other}
                image={featureClicked.properties.image}
                plan={featureClicked.properties.plan}
              />
            </CustomPopup>
          }
        </Map>
      </MapContent>
    </>
  );
};

export default App;
