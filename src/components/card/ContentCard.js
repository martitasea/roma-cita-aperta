import React, {useState} from 'react';
import {Colors} from '../../config';
import {poiFeature} from '../proptypes/poiFeature';
import Alert from '@mui/material/Alert';
import {TabContext} from '@mui/lab';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
/*import WeekToogleButton from '../WeekToogleButton';*/
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import styled from '@mui/styles/styled';


const PlanImage = styled('img')({
  maxWidth: '100%',
});

const ContentCard = ({poi}) => {
  const colorProfile = Colors(poi.type);
  const [tabValue, setTabValue] = useState('description');
  const handleTabChange = (event, newValue) => setTabValue(newValue);
  const tabs = {
    '& .MuiButtonBase-root': {
      py:0,
      px:2,
      color: '#a8a8a8',

      '&.Mui-selected': {
        color: colorProfile,
      },
    },
    '& .MuiTabs-indicator': {
      bottom:8,
      backgroundColor: colorProfile,
    },
  };
  return <CardContent>
    {poi.alert_visit && <Alert severity='success' sx={{width: '100%', p:0}}>{poi.alert_visit}</Alert>}
    <TabContext value={tabValue}>
      <Tabs value={tabValue} onChange={handleTabChange} sx={tabs}>
        {poi.description && <Tab label='Descripción' value='description'/>}
        {poi.plan && <Tab label='Plano' value='plan'/>}
      </Tabs>
      <TabPanel value='description' index={1} sx={{p: 0, m: 'auto'}}>
        <Box sx={{maxHeight: 250, overflowY: 'auto'}}>
          <Typography variant='caption'>{poi.description}</Typography>
        </Box>
      </TabPanel>
      <TabPanel value='plan' index={2} sx={{p: 0}}>
        <PlanImage alt={name} src={poi.plan}/>
      </TabPanel>
    </TabContext>
  </CardContent>;
};

ContentCard.propTypes = {
  poi: poiFeature,
};

export default ContentCard;

