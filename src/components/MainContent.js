import React, {useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';

import {GeolocateControl} from 'react-map-gl';
import Map from '@geomatico/geocomponents/Map';

import {INITIAL_VIEWPORT, LAYERS} from '../config';
import styled from '@mui/styles/styled';
import {Popup} from 'react-map-gl';

import PopupInfo from '../components/PopupInfo';
import {useDispatch, useSelector} from 'react-redux';
import {getFeatures} from '../modules/api/selectors';
import {apiGetFeatures} from '../modules/api/actions';

const CustomPopup = styled(Popup)({
  '& .mapboxgl-popup-content': {
    padding: 0
  }
});

const MainContent = ({mapStyle}) => {
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
  const [featureClicked, setFeatureClicked] = useState(undefined);
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
  const layers = useMemo (() => LAYERS, []);
  useEffect(() => {
    dispatch(apiGetFeatures());
  }, []);
  const onViewportChange = (viewport) =>
    setViewport({
      ...viewport
    });
  const handleOnClick = (e) => setFeatureClicked(e.features && e.features[0]);
  return <Map
    mapStyle={mapStyle}
    viewport={viewport}
    onViewportChange={onViewportChange}
    sources={sources}
    layers={layers}
    interactiveLayerIds={layers.map(({id}) => id)}
    onClick={handleOnClick}
    // mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN} // Token necesario para ver datos de mapbox o usar mapbox-gl-js v2 (react-map-gl 6)
  >
    {
      featureClicked && <CustomPopup
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
          timetable={JSON.parse(featureClicked.properties.timetable)}
          alert_timetable={featureClicked.properties.alert_timetable}
          alert_visit={featureClicked.properties.alert_visit}
        />
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
  mapStyle: PropTypes.string.isRequired
};

export default MainContent;