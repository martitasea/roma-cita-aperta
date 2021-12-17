import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

const today = new Date ();
const todayWeekDay = today.getDay();
/*const now = today.getHours() + '.' + today.getMinutes();*/

const Group = styled(ToggleButtonGroup)({
  '&.MuiToggleButtonGroup-root': {
    marginTop: '8px',
    '& .Mui-selected': {
      backgroundColor: '#519259bf',
      color: 'white',
    },
    '& .Mui-disabled': {
      color: '#ececec'
    },
  },
  '& .MuiButtonBase-root': {
    width: 50,
    height: 25,
  }
});

const WeekToogleButton = ({timetable, alert_timetable}) => {
  const [weekday, setWeekDay] = useState(todayWeekDay);

  const handleDay = (e, day) => setWeekDay(day);

  /*const timeToDecimal = (timeHex) => {
    const timeToArray = timeHex.split('.');
    const hour = parseInt(timeToArray[0]);
    const minutes = parseInt(timeToArray[1]);
    return ((minutes/60)+hour);
  };*/

  /*const handleOpening = (timeOpen, timeClose) => {
    return timeToDecimal(now) >= timeToDecimal(timeOpen) && timeToDecimal(now) < timeToDecimal(timeClose);
  };*/

  const timetableStyle = {
    pl:1,
    color: 'text.primary'
  };

  return <Box display='flex' flexDirection='column' alignItems='center'>
    {
      alert_timetable !== '' &&
      <Alert severity="success" sx={{mt: 1, width: 340}}>{alert_timetable}</Alert>
    }
    <Group
      value={weekday}
      exclusive
      onChange={handleDay}
      size='large'
    >
      {
        timetable.map (({id, label, opening}) =>
          <ToggleButton
            key={parseInt(id)}
            value={parseInt(id)}
            color='primary'
            disabled={(opening.open === '' || opening.close === '')}
          >
            <Typography>{label}</Typography>
          </ToggleButton>
        )
      }
    </Group>
    <Box display='flex' flexDirection='row' mt={2}>
      <Typography sx={timetableStyle}>Abierto</Typography>
      <Typography sx={timetableStyle}>{timetable.find(value => parseInt(value.id) === weekday).opening.open}</Typography>
      <Typography sx={timetableStyle}>-</Typography>
      <Typography sx={timetableStyle}>{timetable.find(value => parseInt(value.id) === weekday).opening.closed}</Typography>
    </Box>
  </Box>;
};

WeekToogleButton.propTypes = {
  alert_timetable: PropTypes.string,
  timetable: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    opening: PropTypes.shape({
      open: PropTypes.string,
      closed: PropTypes.string
    })
  })).isRequired
};

WeekToogleButton.defaultProps = {
  alert_timetable: ''
};

export default WeekToogleButton;