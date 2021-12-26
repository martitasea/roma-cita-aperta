import React, {useState} from 'react';
import {Colors} from '../../config';
import {poiFeature} from '../proptypes/poiFeature';
import Alert from '@mui/material/Alert';
import {TabContext} from '@mui/lab';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import WeekToogleButton from '../WeekToogleButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const ContentCard = ({poi}) => {
  const colorProfile = Colors(poi.type);
  const [tabValue, setTabValue] = useState(poi.description ? 'description' : 'open');
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
    {poi.alert_visit && <Alert severity="success" sx={{mt: 1, width: '100%'}}>{poi.alert_visit}</Alert>}
    <TabContext value={tabValue}>
      <Tabs value={tabValue} onChange={handleTabChange} sx={tabs}>
        {poi.description && <Tab label="Descripción" value="description"/>}
        {/*{poi.timetable && <Tab label="Horario" value="open"/>}*/}
        {poi.plan && <Tab label="Plano" value="plan"/>}
      </Tabs>
      {/*{
        poi.timetable && <TabPanel value="open" index={0} sx={{p: 0}}>
          <WeekToogleButton timetable={poi.timetable} alert_timetable={poi.alert_timetable} alert_visit={poi.alert_visit}/>
        </TabPanel>
      }*/}
      <TabPanel value="description" index={1} sx={{m: 1, p: 0,}}>
        <Box sx={{maxHeight: 250, height: 'auto', overflowY: 'auto', mt: 1}}>
          <Typography variant="caption">{poi.description}</Typography>
        </Box>
      </TabPanel>
      <TabPanel value="plan" index={2} sx={{m: 1, p: 0}}>
        <img alt={name} src={poi.plan} width="350"/>
      </TabPanel>
    </TabContext>
  </CardContent>;
};

ContentCard.propTypes = {
  poi: poiFeature,
};

export default ContentCard;