import React from 'react';
import {poiFeature} from '../proptypes/poiFeature';
import Card from '@mui/material/Card';
import HeaderCard from './HeaderCard';
import ContentCard from './ContentCard';
import ActionsCard from './ActionsCard';

const PoiCard = ({poi}) => {
  return <Card sx={{width: 395}} elevation={12}>
    <HeaderCard poi={poi}/>
    <ContentCard poi={poi}/>
    <ActionsCard poi={poi}/>
  </Card>;
};

PoiCard.propTypes = {
  poi: poiFeature
};

PoiCard.defaultProps = {};

export default PoiCard;