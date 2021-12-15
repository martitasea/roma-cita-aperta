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
import WeekToogleButton from './WeekToogleButton';

const PopupInfo = ({name, style, author, description, price, other, image, plan, timetable}) => {
  const [tabValue, setTabValue] = useState('description');
  const handleTabChange = (event, newValue) => setTabValue(newValue);
  return <Card sx={{ maxWidth: 365}} elevation={12}>
    <CardHeader
      avatar={<Avatar sx={{bgcolor: 'primary.main'}}>
        {price ? <AttachMoneyIcon/> : <MoneyOffCsredIcon/>}
      </Avatar>}
      title={name.toUpperCase()}
      subheader={`${author} - ${style.toUpperCase()}`}
    />
    { image &&
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
          <Tab label='Descripción' value='description' />
          <Tab label='Horario' value='open'/>
          <Tab label='Plano' value='map'/>
        </Tabs>
        <TabPanel value='open' index={0} sx={{m: 1, p: 0}}>
          <WeekToogleButton timetable={timetable}/>
        </TabPanel>
        <TabPanel value='description' index={1} sx={{maxHeight: 345, m: 1, p: 0, height: 'auto', overflowY: 'auto'}}>
          <Typography variant='caption'>{description}</Typography>
          <Typography>{price}</Typography>
          <Typography>{other}</Typography>
        </TabPanel>
        <TabPanel value='map' index={2} sx={{m: 1, p: 0}}>
          <img alt={name} src={plan} width='350'/>
        </TabPanel>
      </TabContext>
    </CardContent>
  </Card>;
};

PopupInfo.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  other: PropTypes.string,
  image: PropTypes.string,
  plan: PropTypes.string,
  timetable: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    opening: PropTypes.shape({
      open: PropTypes.string,
      closed: PropTypes.string
    })
  }))
};

PopupInfo.defaultProps = {
  style: '',
  author: '',
  description: '',
  pryce: '',
  other: '',
  image: '',
  plan: '',
  timetable: {}
};

export default PopupInfo;
