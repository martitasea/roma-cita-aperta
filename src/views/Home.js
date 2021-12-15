import React, {useState} from 'react';

import Layout from '../components/Layout';
import SidePanelContent from '../components/SidePanelContent';
import MainContent from '../components/MainContent';

import {INITIAL_MAPSTYLE_URL} from '../config';
import Typography from '@mui/material/Typography';
import Logo from '../components/img/Logo.png';

const Home = () => {
  const [mapStyle, setMapStyle] = useState(INITIAL_MAPSTYLE_URL);

  const sidePanelContent = <SidePanelContent
    mapStyle={mapStyle}
    onMapStyleChanged={setMapStyle}
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
