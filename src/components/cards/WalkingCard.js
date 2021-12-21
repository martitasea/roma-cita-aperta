import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';
import {TabContext} from '@mui/lab';
import MoneyOffCsredIcon from '@mui/icons-material/MoneyOffCsred';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WeekToogleButton from '../WeekToogleButton';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

const WalkingCard = ({name, style, author, description, price, other, image, plan, timetable, alert_timetable, alert_visit}) => {
  const [tabValue, setTabValue] = useState('description');
  const handleTabChange = (event, newValue) => setTabValue(newValue);
  return <Card sx={{maxWidth: 365}} elevation={12}>
    <CardHeader
      avatar={<Avatar sx={{bgcolor: price ? 'secondary.main' : 'primary.main'}}>
        {price ? <AttachMoneyIcon/> : <MoneyOffCsredIcon/>}
      </Avatar>}
      title={name.toUpperCase()}
      subheader={`${author} - ${style}`}
    />
    {image &&
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={name}
      />
    }
    <CardContent>
      <TabContext value={tabValue}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label='Descripción' value='description'/>
          <Tab label='Horario' value='open'/>
          <Tab label='Plano' value='map'/>
        </Tabs>
        <TabPanel value='open' index={0} sx={{m: 1, p: 0}}>
          <WeekToogleButton timetable={timetable} alert_timetable={alert_timetable} alert_visit={alert_visit}/>
        </TabPanel>
        <TabPanel value='description' index={1} sx={{m: 1, p: 0,}}>
          {alert_visit !== '' && <Alert severity="success" sx={{mt: 1, width: 325}}>{alert_visit}</Alert>}
          <Box sx={{maxHeight: 250, height: 'auto', overflowY: 'auto', mt: 1}}>
            <Typography variant='caption'>{description}</Typography>
            <Typography>{price}</Typography>
            <Typography>{other}</Typography>
          </Box>
        </TabPanel>
        <TabPanel value='map' index={2} sx={{m: 1, p: 0}}>
          <img alt={name} src={plan} width='350'/>
        </TabPanel>
      </TabContext>
    </CardContent>
  </Card>;
};

WalkingCard.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  other: PropTypes.string,
  image: PropTypes.string,
  plan: PropTypes.string,
  alert_timetable: PropTypes.string,
  alert_visit: PropTypes.string,
  timetable: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    opening: PropTypes.shape({
      open: PropTypes.string,
      closed: PropTypes.string
    })
  }))
};

WalkingCard.defaultProps = {
  style: '',
  author: '',
  description: '',
  pryce: '',
  other: '',
  image: '',
  plan: '',
  alert_timetable: '',
  alert_visit: '',
  timetable: {}
};

export default WalkingCard;