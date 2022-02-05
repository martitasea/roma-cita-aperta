import React from 'react';
import PropTypes from 'prop-types';
import {poiFeature} from '../proptypes/poiFeature';
import Card from '@mui/material/Card';
import HeaderCard from './HeaderCard';
import ContentCard from './ContentCard';
import ActionsCard from './ActionsCard';

const PoiCard = ({poi, onVisitedPoi, widthCard, elevationCard}) => {
  return <Card sx={{width: widthCard}} elevation={elevationCard}>
    <HeaderCard poi={poi}/>
    <ContentCard poi={poi}/>
    <ActionsCard poi={poi} onVisitedPoi={onVisitedPoi}/>
  </Card>;
};

PoiCard.propTypes = {
  poi: poiFeature,
  onVisitedPoi: PropTypes.func,
  widthCard: PropTypes.string,
  elevationCard: PropTypes.number
};

PoiCard.defaultProps = {
  widthCard: '100%',
  elevationCard: 10
};

export default PoiCard;