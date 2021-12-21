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
import WeekToogleButton from '../WeekToogleButton';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import {Colors} from './TypeColors';
import {CardActions, IconButton} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Categories from './Categories';

const COLOR_PROFILE = 'visit';

const VisitCard = ({
  name,
  style,
  author,
  category,
  description,
  price,
  image,
  plan,
  timetable,
  alert_timetable,
  alert_visit,
  doc,
  web
}) => {
  const [tabValue, setTabValue] = useState(description ? 'description' : 'open');
  const handleTabChange = (event, newValue) => setTabValue(newValue);
  const handleWebOpen = () => web && window.open(`${web}`, '_blank');
  const handleDocOpen = () => web && window.open(`${doc}`, '_blank');
  const tabs = {
    '& .MuiButtonBase-root': {
      py:0,
      px:2,
      color: Colors(COLOR_PROFILE)
    },
    '& .MuiTabs-indicator': {
      bottom:8,
      backgroundColor: Colors(COLOR_PROFILE)
    },
  };
  return <Card sx={{width: 395}} elevation={12}>
    <CardHeader
      avatar={<Avatar sx={{bgcolor: Colors(COLOR_PROFILE)}}>
        {category !== '' ? <Categories categoryId={category}/> : <Categories categoryId='DefaultIcon'/>}
      </Avatar>}
      title={name.toUpperCase()}
      subheader={`${author} - ${style.toUpperCase()}`}
    />
    {image &&
      <CardMedia
        component='img'
        height='194'
        image={image}
        alt={name}
      />
    }
    <CardContent>
      {alert_visit !== '' && <Alert severity='success' sx={{mt: 1, width: '100%'}}>{alert_visit}</Alert>}
      {
        <TabContext value={tabValue}>
          <Tabs value={tabValue} onChange={handleTabChange} sx={tabs}>
            {description && <Tab label='Descripción' value='description'/>}
            {timetable && <Tab label='Horario' value='open'/>}
            {plan && <Tab label='Plano' value='plan'/>}
          </Tabs>

          <TabPanel value='open' index={0} sx={{p: 0}}>
            <WeekToogleButton timetable={timetable} alert_timetable={alert_timetable} alert_visit={alert_visit}/>
          </TabPanel>

          <TabPanel value='description' index={1} sx={{m: 1, p: 0,}}>
            <Box sx={{maxHeight: 250, height: 'auto', overflowY: 'auto', mt: 1}}>
              <Typography variant='caption'>{description}</Typography>
            </Box>
          </TabPanel>

          <TabPanel value='plan' index={2} sx={{m: 1, p: 0}}>
            <img alt={name} src={plan} width='350'/>
          </TabPanel>

        </TabContext>
      }
    </CardContent>
    <CardActions sx={{display:'flex', justifyContent:'space-between', mr:1}}>
      <Box>
        <IconButton disabled={!web} sx={{color: Colors('visit')}} onClick={handleWebOpen}>
          <LanguageIcon />
        </IconButton>
        <IconButton>
          <VisibilityIcon/>
        </IconButton>
        <IconButton disabled={!doc} onClick={handleDocOpen}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
      {price && <Chip label={price}/>}
    </CardActions>
  </Card>;
};

VisitCard.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  web: PropTypes.string,
  image: PropTypes.string,
  plan: PropTypes.string,
  doc: PropTypes.string,
  alert_timetable: PropTypes.string,
  alert_visit: PropTypes.string,
  timetable: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    opening: PropTypes.shape({
      open: PropTypes.string,
      closed: PropTypes.string
    })
  })),
};

VisitCard.defaultProps = {
  style: '',
  author: '',
  description: '',
  pryce: '',
  web: '',
  doc: '',
  image: '',
  alert_timetable: '',
  alert_visit: '',
};

export default VisitCard;