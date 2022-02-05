import React, {useState} from 'react';
import {FlyToInterpolator} from 'react-map-gl';

import Layout from '../components/Layout';
import SidePanelContent from '../components/SidePanelContent';
import MainContent from '../components/MainContent';
import Logo from '../components/img/Logo.png';

import {INITIAL_MAPSTYLE_URL, WIDESCREEN_STEP} from '../config';

import {useDispatch, useSelector} from 'react-redux';
import {getVisitFeatures, getWalkFeatures} from '../modules/api/selectors';
import {setViewport} from '../modules/app/actions';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';

const Home = () => {
  const widescreen = useMediaQuery(`(min-width: ${WIDESCREEN_STEP})`, {noSsr: true});
  const dispatch = useDispatch();
  const [mapStyle, setMapStyle] = useState(INITIAL_MAPSTYLE_URL);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(widescreen? true : false);
  const visit = useSelector(getVisitFeatures);
  const walk = useSelector(getWalkFeatures);
  const visitFeaturesList = visit.features.map(feature => {
    return {
      id: feature.properties.id,
      label: feature.properties.name,
      latitude: feature.geometry.coordinates[1],
      longitude: feature.geometry.coordinates[0],
    };
  });
  const walkFeaturesList = walk.features.map(feature => {
    return {
      id: feature.properties.id,
      label: feature.properties.name,
      latitude: feature.geometry.coordinates[1],
      longitude: feature.geometry.coordinates[0],
    };
  });
  const allFeatureList = visitFeaturesList.concat(walkFeaturesList);
  const handleFeatureSelect = (feature) => {
    setSelectedFeature(feature);
    const selectedFeature = {
      latitude: feature.latitude,
      longitude: feature.longitude,
      zoom: 17,
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator(),
    };
    dispatch(setViewport(selectedFeature));
    setIsSidePanelOpen(false);
  };

  const sidePanelContent = <SidePanelContent
    mapStyle={mapStyle}
    onMapStyleChanged={setMapStyle}
    featuresList={allFeatureList}
    selectedFeature={selectedFeature}
    onFeatureSelect={handleFeatureSelect}
  />;

  const handleSidePanelOpen = () => setIsSidePanelOpen(!isSidePanelOpen);

  const mainContent = <MainContent
    mapStyle={mapStyle}
    onViewportChange={(vp) => dispatch(setViewport(vp))}
    featuresList={allFeatureList}
    selectedFeature={selectedFeature}
    onFeatureSelect={handleFeatureSelect}
  />;

  return <Layout
    headerLogo={<img src={Logo} height={50} alt='Roma Cità Aperta'/>}
    headerTitle={<Typography sx={{mt:3.2, ml:2, fontSize: '24px'}}>ROMA CITÀ APERTA</Typography>}
    sidePanelContent={sidePanelContent}
    mainContent={mainContent}
    isSidePanelOpen={isSidePanelOpen}
    onSidePanelOpen={handleSidePanelOpen}
  />;
};

export default Home;
