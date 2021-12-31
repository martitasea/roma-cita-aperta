import React, {useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';

import {GeolocateControl} from 'react-map-gl';
import Map from '@geomatico/geocomponents/Map';

import {INITIAL_VIEWPORT, LAYERS, VISITED_FEATURES} from '../config';
import styled from '@mui/styles/styled';
import {Popup} from 'react-map-gl';

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

const CustomPopup = styled(Popup)({
  '& .mapboxgl-popup-content': {
    padding: 0
  }
});

const MainContent = ({mapStyle}) => {
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
  const [featureClicked, setFeatureClicked] = useState(undefined);
  const dispatch = useDispatch();
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
  }));

  const layers = useMemo (() => LAYERS, [VISITED_FEATURES]);
  useEffect(() => {
    dispatch(apiGetVisitFeatures());
    dispatch(apiGetWalkFeatures());
    dispatch(apiGetAccomodationFeatures());
    dispatch(apiGetCommerceFeatures());
    dispatch(apiGetCateringFeatures());
  }, []);
  const onViewportChange = (viewport) =>
    setViewport({
      ...viewport
    });  const handleOnClick = (e) => setFeatureClicked(e.features && e.features[0]);
  const handleVisitedPoi = (id) => localStorage.setItem('roma-cita-aperta.visitedFeatures', id);

  return <Map
    mapStyle={mapStyle}
    viewport={viewport}
    onViewportChange={onViewportChange}
    sources={sources}
    layers={layers}
    interactiveLayerIds={layers.map(({id}) => id)}
    onClick={handleOnClick}
  >
    {
      featureClicked && <CustomPopup
        longitude={featureClicked.geometry.coordinates[0]}
        latitude={featureClicked.geometry.coordinates[1]}
        anchor="bottom"
        closeButton={false}
      >
        <PoiCard poi={featureClicked.properties} onVisitedPoi={handleVisitedPoi}/>
      </CustomPopup>
    }
    <GeolocateControl
      style={{right: 10, top: 20}}
      positionOptions={{enableHighAccuracy: true}}
      trackUserLocation={true}
      showAccuracyCircle={false}
    />
  </Map>;
};

MainContent.propTypes = {
  mapStyle: PropTypes.string.isRequired,
  onSidePanelOpen: PropTypes.func,
};

export default MainContent;