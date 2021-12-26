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

const ActionsCard = ({poi}) => {
  const colorProfile = Colors(poi.type);
  const handleWebOpen = () => poi.web && window.open(`${poi.web}`, '_blank');
  const handleDocOpen = () => poi.web && window.open(`${poi.doc}`, '_blank');
  const handleBookOpen = () => poi.web && window.open(`${poi.book}`, '_blank');
  return <CardActions sx={{display: 'flex', justifyContent: 'space-between', mr: 1}}>
    <Box>
      {
        poi.web && <IconButton disabled={!poi.web} sx={{color: colorProfile}} onClick={handleWebOpen}>
          <LanguageIcon/>
        </IconButton>
      }
      {
        poi.doc && <IconButton disabled={!poi.doc} onClick={handleDocOpen}>
          <AddCircleOutlineIcon/>
        </IconButton>
      }
      {
        poi.book && <IconButton>
          <LocalActivityIcon onClick={handleBookOpen}/>
        </IconButton>
      }
      <IconButton>
        <VisibilityIcon/>
      </IconButton>
    </Box>
    {
      poi.price && <Chip label={poi.price}/>
    }
  </CardActions>;
};

ActionsCard.propTypes = {
  poi: poiFeature,
};

export default ActionsCard;