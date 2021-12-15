import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const today = new Date ();
const todayWeekDay = today.getDay();
/*const now = today.getHours() + '.' + today.getMinutes();*/

const WeekToogleButton = ({timetable}) => {
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
    <ToggleButtonGroup
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
    </ToggleButtonGroup>
    <Box display='flex' flexDirection='row' mt={2}>
      <Typography sx={timetableStyle}>Abierto</Typography>
      <Typography sx={timetableStyle}>{timetable.find(value => parseInt(value.id) === weekday).opening.open}</Typography>
      <Typography sx={timetableStyle}>-</Typography>
      <Typography sx={timetableStyle}>{timetable.find(value => parseInt(value.id) === weekday).opening.closed}</Typography>
    </Box>
  </Box>;
};

WeekToogleButton.propTypes = {
  timetable: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    opening: PropTypes.shape({
      open: PropTypes.string,
      closed: PropTypes.string
    })
  }))
};

WeekToogleButton.defaultProps = {};

export default WeekToogleButton;