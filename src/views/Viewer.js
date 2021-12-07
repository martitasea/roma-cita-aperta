import React, {useState, useMemo} from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import BaseMapList from '@geomatico/geocomponents/BaseMapList';
import ResponsiveHeader from '@geomatico/geocomponents/ResponsiveHeader';
import SidePanel from '@geomatico/geocomponents/SidePanel';
import Map from '@geomatico/geocomponents/Map';

import {MAPSTYLES, WIDESCREEN_STEP, INITIAL_VIEWPORT, DRAWER_WIDTH, INITIAL_MAPSTYLE_URL} from '../config';

import SectionTitle from '../components/SectionTitle';
import styled from '@mui/styles/styled';

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

const App = () => {
  const widescreen = useMediaQuery(`(min-width: ${WIDESCREEN_STEP})`, {noSsr: true});
  const [selectedStyleUrl, setSelectedStyleUrl] = useState(INITIAL_MAPSTYLE_URL);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);

  const sources = useMemo(() => ({
    monumentos_iglesias_mas: {
      type: 'geojson',
      data: 'carto/monumentos_iglesias_mas.geojson'
    }
  }), []);

  const layers = useMemo(() => ([
    {
      id: 'monumentos_iglesias_mas',
      source: 'monumentos_iglesias_mas',
      type: 'circle',
      paint: {
        'circle-radius': 4,
        'circle-color': 'red',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#000'
      }
    }
  ]), []);

  const onViewportChange = (viewport) =>
    setViewport({
      ...viewport
    });
  const handleClose = () => setIsSidePanelOpen(!isSidePanelOpen);
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
          <Box mb={6}>
            <SectionTitle titleKey="baseMapStyle"/>
            <BaseMapList
              styles={MAPSTYLES}
              selectedStyleUrl={selectedStyleUrl}
              onStyleChange={(basemap) => setSelectedStyleUrl(basemap)}
              typographyStyleProps={{fontSize: 14}}
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
          // mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN} // Token necesario para ver datos de mapbox o usar mapbox-gl-js v2 (react-map-gl 6)
        />
      </MapContent>
    </>
  );
};

export default App;
