import React from 'react';
import Avatar from '@mui/material/Avatar';
import Categories from './Categories';
import CardHeader from '@mui/material/CardHeader';
import {Colors} from '../../config';
import {poiFeature} from '../proptypes/poiFeature';
import CardMedia from '@mui/material/CardMedia';

const HeaderCard = ({poi}) => {
  const colorProfile = Colors(poi.type);
  return <>
    <CardHeader
      avatar={<Avatar sx={{bgcolor: colorProfile}}>
        {poi.category ? <Categories categoryId={poi.category}/> :
          <Categories categoryId="DefaultIcon"/>}
      </Avatar>}
      title={poi.name.toUpperCase()}
      subheader={`${poi.author || ''} - ${poi.style?.toUpperCase() || ''}`}
    />
    {
      poi.image &&
      <CardMedia
        component="img"
        height="194"
        image={poi.image}
        alt={poi.name}
      />
    }
  </>;
};

HeaderCard.propTypes = {
  poi: poiFeature,
};

export default HeaderCard;