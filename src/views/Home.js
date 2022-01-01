import React, {useState} from 'react';

import Layout from '../components/Layout';
import SidePanelContent from '../components/SidePanelContent';
import MainContent from '../components/MainContent';

import {INITIAL_MAPSTYLE_URL} from '../config';
import Typography from '@mui/material/Typography';
import Logo from '../components/img/Logo.png';
import {useSelector} from 'react-redux';
import {getVisitFeatures} from '../modules/api/selectors';

const Home = () => {
  const [mapStyle, setMapStyle] = useState(INITIAL_MAPSTYLE_URL);
  const visit = useSelector(getVisitFeatures);
  const visitFeaturesList = visit.features.map(feature => {
    return {
      id: feature.properties.id,
      label: feature.properties.name,
      viewport: {
        latitude: feature.geometry.coordinates[0],
        longitude: feature.geometry.coordinates[1]
      }
    };
  });

  const sidePanelContent = <SidePanelContent
    mapStyle={mapStyle}
    onMapStyleChanged={setMapStyle}
    featuresName={visitFeaturesList}
  />;

  const mainContent = <MainContent
    mapStyle={mapStyle}
  />;

  return <Layout
    headerLogo={<img src={Logo} height={50} alt='Roma Cità Aperta'/>}
    headerTitle={<Typography variant='h5' sx={{mt:3.2, ml:2}}>ROMA CITÀ APERTA</Typography>}
    sidePanelContent={sidePanelContent}
    mainContent={mainContent}
  />;
};

export default Home;
