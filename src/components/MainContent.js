import React, {useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';

import {GeolocateControl} from 'react-map-gl';
import Map from '@geomatico/geocomponents/Map';
import BottomSheet from '@geomatico/geocomponents/BottomSheet';

import {LAYERS, VISITED_FEATURES} from '../config';
import styled from '@mui/styles/styled';
import {Popup} from 'react-map-gl';

import Hidden from '@mui/material/Hidden';

import {useDispatch, useSelector} from 'react-redux';
import {
  getVisitFeatures,
  getWalkFeatures,
  getAccomodationFeatures,
  getCommerceFeatures,
  getCateringFeatures
} from '../modules/api/selectors';
import {
  apiGetVisitFeatures,
  apiGetWalkFeatures,
  apiGetAccomodationFeatures,
  apiGetCommerceFeatures,
  apiGetCateringFeatures
} from '../modules/api/actions';
import PoiCard from './card/PoiCard';
import {getViewport} from '../modules/app/selectors';
import AutocompleteInput from './AutocompleteInput';
import Box from '@mui/material/Box';

const CustomPopup = styled(Popup)({
  '& .mapboxgl-popup-content': {
    padding: 0
  }
});

const MainContent = ({mapStyle, onViewportChange, featuresList, selectedFeature, onFeatureSelect }) => {
  const [featureClicked, setFeatureClicked] = useState(undefined);
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(true);
  const dispatch = useDispatch();
  const viewport = useSelector(getViewport);
  const visit = useSelector(getVisitFeatures);
  const walk = useSelector(getWalkFeatures);
  const accomodation = useSelector(getAccomodationFeatures);
  const commerce = useSelector(getCommerceFeatures);
  const catering = useSelector(getCateringFeatures);
  const sources = useMemo(() => ({
    visit: {
      type: 'geojson',
      data: visit
    },
    walk: {
      type: 'geojson',
      data: walk
    },
    accomodation: {
      type: 'geojson',
      data: accomodation
    },
    commerce: {
      type: 'geojson',
      data: commerce
    },
    catering: {
      type: 'geojson',
      data: catering
    },
    quartieri: {
      type: 'geojson',
      data: 'carto/quartieri.geojson'
    },
    colinas: {
      type: 'geojson',
      data: 'carto/colinas.geojson'
    },
    muralla_severiana: {
      type: 'geojson',
      data: 'carto/muralla-severiana.geojson'
    }
  }));

  const layers = useMemo(() => LAYERS, [VISITED_FEATURES]);
  useEffect(() => {
    dispatch(apiGetVisitFeatures());
    dispatch(apiGetWalkFeatures());
    dispatch(apiGetAccomodationFeatures());
    dispatch(apiGetCommerceFeatures());
    dispatch(apiGetCateringFeatures());
  }, []);

  const handleViewportChange = ({
    width,
    height,
    latitude,
    longitude,
    zoom,
    bearing,
    pitch,
    transitionDuration = undefined,
    transitionInterpolator = undefined
  }) =>
    onViewportChange({
      width, height, latitude, longitude, zoom, bearing, pitch, transitionDuration, transitionInterpolator
    });
  const handleOnClick = (e) => setFeatureClicked(e.features && e.features[0]);
  const handleVisitedPoi = (id) => localStorage.setItem('roma-cita-aperta.visitedFeatures', id);

  return <Map
    mapStyle={mapStyle}
    viewport={viewport}
    onViewportChange={handleViewportChange}
    sources={sources}
    layers={layers}
    /*interactiveLayerIds={layers.map(({id}) => id)}*/
    interactiveLayerIds={['visit', 'walk', 'accomodation', 'commerce', 'catering']}
    onClick={handleOnClick}
  >
    <Hidden smUp>
      <Box sx={{width: '85vw', position: 'absolute', right: 8, top: 10}}>
        <AutocompleteInput
          featuresList={featuresList}
          selectedFeature={selectedFeature}
          onFeatureSelect={onFeatureSelect}
        />
      </Box>
    </Hidden>
    {
      featureClicked && <>
        <Hidden smDown>
          <CustomPopup
            longitude={featureClicked.geometry.coordinates[0]}
            latitude={featureClicked.geometry.coordinates[1]}
            anchor="bottom"
            closeButton={false}
          >
            <PoiCard poi={featureClicked.properties} onVisitedPoi={handleVisitedPoi} widthCard={'350px'} elevationCard={12}/>
          </CustomPopup>
        </Hidden>
        <Hidden smUp>
          <BottomSheet
            closedHeight={120}
            openHeight={'50vh'}
            onToggle={() => setBottomSheetOpen(!isBottomSheetOpen)}
            isOpen={isBottomSheetOpen}>
            <PoiCard poi={featureClicked.properties} onVisitedPoi={handleVisitedPoi}/>
          </BottomSheet>
        </Hidden>
      </>
    }
    <GeolocateControl
      style={{right: 10, bottom: 10, zIndex: '10000'}}
      positionOptions={{enableHighAccuracy: true}}
      trackUserLocation={true}
      showAccuracyCircle={false}
    />
  </Map>;
};

MainContent.propTypes = {
  mapStyle: PropTypes.string.isRequired,
  onSidePanelOpen: PropTypes.func,
  onViewportChange: PropTypes.func,
  featuresList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  })).isRequired,
  onFeatureSelect: PropTypes.func.isRequired,
  selectedFeature: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  }),
};

export default MainContent;