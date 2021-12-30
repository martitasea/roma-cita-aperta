import React from 'react';
import PropTypes from 'prop-types';
import {poiFeature} from '../proptypes/poiFeature';
import Card from '@mui/material/Card';
import HeaderCard from './HeaderCard';
import ContentCard from './ContentCard';
import ActionsCard from './ActionsCard';

const PoiCard = ({poi, onVisitedPoi}) => {
  return <Card sx={{width: 395}} elevation={12}>
    <HeaderCard poi={poi}/>
    <ContentCard poi={poi}/>
    <ActionsCard poi={poi} onVisitedPoi={onVisitedPoi}/>
  </Card>;
};

PoiCard.propTypes = {
  poi: poiFeature,
  onVisitedPoi: PropTypes.func,
};

export default PoiCard;