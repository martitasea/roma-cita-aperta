import React, {useState, useMemo} from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import {Popup} from 'react-map-gl';

import BaseMapList from '@geomatico/geocomponents/BaseMapList';
import MapLegend from '@geomatico/geocomponents/MapLegend';
import ResponsiveHeader from '@geomatico/geocomponents/ResponsiveHeader';
import SidePanel from '@geomatico/geocomponents/SidePanel';
import Map from '@geomatico/geocomponents/Map';

import {LEGEND, MAPSTYLES, WIDESCREEN_STEP, INITIAL_VIEWPORT, DRAWER_WIDTH, INITIAL_MAPSTYLE_URL} from '../config';

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
  const [featureClicked, setFeatureClicked] = useState(undefined);

  const sources = useMemo(() => ({
    estrellas: {
      type: 'geojson',
      data: 'carto/estrellas.geojson'
    },
    fuentes: {
      type: 'geojson',
      data: 'carto/fuentes.geojson'
    },
    montes: {
      type: 'geojson',
      data: 'carto/montes.geojson'
    },
    monumentos_iglesias_mas: {
      type: 'geojson',
      data: 'carto/monumentos_iglesias_mas.geojson'
    },
    museos: {
      type: 'geojson',
      data: 'carto/museos.geojson'
    },
    parques_miradores: {
      type: 'geojson',
      data: 'carto/parques_miradores.geojson'
    },
    plazas_calles_puertas_puentes: {
      type: 'geojson',
      data: 'carto/plazas_calles_puertas_puentes.geojson'
    },
    restaurantes_bares: {
      type: 'geojson',
      data: 'carto/restaurantes_bares.geojson'
    },
    tiendas_mercados: {
      type: 'geojson',
      data: 'carto/tiendas_mercados.geojson'
    },
  }), []);

  const layers = useMemo(() => ([
    {
      id: 'estrellas',
      source: 'estrellas',
      type: 'circle',
      paint: {
        'circle-radius': 5,
        'circle-color': '#028090',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#5d5d5d'
      }
    },
    {
      id: 'fuentes',
      source: 'fuentes',
      type: 'circle',
      paint: {
        'circle-radius': 5,
        'circle-color': '#00BFB2',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#5d5d5d'
      }
    },
    {
      id: 'montes',
      source: 'montes',
      type: 'circle',
      paint: {
        'circle-radius': 5,
        'circle-color': '#252424',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#151414'
      }
    },
    {
      id: 'monumentos_iglesias_mas',
      source: 'monumentos_iglesias_mas',
      type: 'circle',
      paint: {
        'circle-radius': 5,
        'circle-color': '#C64191',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#5d5d5d'
      }
    },
    {
      id: 'museos',
      source: 'museos',
      type: 'circle',
      paint: {
        'circle-radius': 5,
        'circle-color': '#c44242',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#5d5d5d'
      }
    },
    {
      id: 'parques_miradores',
      source: 'parques_miradores',
      type: 'circle',
      paint: {
        'circle-radius': 5,
        'circle-color': '#1A5E63',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#5d5d5d'
      }
    },
    {
      id: 'plazas_calles_puertas_puentes',
      source: 'museos',
      type: 'circle',
      paint: {
        'circle-radius': 5,
        'circle-color': '#FF7700',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#5d5d5d'
      }
    },
    {
      id: 'restaurantes_bares',
      source: 'restaurantes_bares',
      type: 'circle',
      paint: {
        'circle-radius': 5,
        'circle-color': '#654f6f',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#5d5d5d'
      }
    },
    {
      id: 'tiendas_mercados',
      source: 'tiendas_mercados',
      type: 'circle',
      paint: {
        'circle-radius': 5,
        'circle-color': '#F0F3BD',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#5d5d5d'
      }
    },

  ]), []);

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
            <Popup
              longitude={featureClicked.geometry.coordinates[0]}
              latitude={featureClicked.geometry.coordinates[1]}
              anchor="bottom"
              closeButton={false}
            >
              {featureClicked.properties.Name}
            </Popup>
          }
        </Map>
      </MapContent>
    </>
  );
};

export default App;
