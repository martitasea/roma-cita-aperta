import React from 'react';
import Box from '@mui/material/Box';
import {CardActions, IconButton} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Chip from '@mui/material/Chip';

import {poiFeature} from '../proptypes/poiFeature';
import {Colors} from '../../config';
import PropTypes from 'prop-types';
import Tripadvisor from '../icons/Tripadvisor';

const ActionsCard = ({poi, onVisitedPoi}) => {
  const colorProfile = Colors(poi.type);
  const handleWebOpen = () => poi.web && window.open(`${poi.web}`, '_blank');
  const handleDocOpen = () => poi.web && window.open(`${poi.doc}`, '_blank');
  const handleBookOpen = () => poi.web && window.open(`${poi.book}`, '_blank');
  const handleOpenTrip = () => poi.webTrip && window.open(`${poi.webTrip}`, '_blank');
  const handleVisited = () => onVisitedPoi(poi.id);
  return <CardActions sx={{display: 'flex', justifyContent: 'space-between', mr: 1, py:0}}>
    <Box>
      {
        poi.web && <IconButton disabled={!poi.web} sx={{color: colorProfile}} onClick={handleWebOpen}>
          <LanguageIcon/>{/*Specific web*/}
        </IconButton>
      }
      {
        poi.doc && <IconButton disabled={!poi.doc} onClick={handleDocOpen}>
          <AddCircleOutlineIcon/>{/*Aditional documentations (videos, blog...)*/}
        </IconButton>
      }
      {
        poi.book && <IconButton onClick={handleBookOpen}>
          <LocalActivityIcon/>{/*Direct link to book tickets*/}
        </IconButton>
      }
      {
        poi.webTrip && <IconButton onClick={handleOpenTrip}>
          <Tripadvisor/>{/*Tripadvisor link*/}
        </IconButton>
      }
      <IconButton onClick={handleVisited}>
        <VisibilityIcon/>{/*Visited poi*/}
      </IconButton>
    </Box>
    {
      poi.price && <Chip label={poi.price}/>/*Price of the visit*/
    }
  </CardActions>;
};

ActionsCard.propTypes = {
  poi: poiFeature,
  onVisitedPoi: PropTypes.func,
};

export default ActionsCard;