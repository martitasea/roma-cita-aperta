import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import BaseMapList from '@geomatico/geocomponents/BaseMapList';
import MapLegend from '@geomatico/geocomponents/MapLegend';

import SectionTitle from './SectionTitle';

import {LEGEND, MAPSTYLES, VISITED_FEATURES} from '../config';

const SidePanelContent = ({mapStyle, onMapStyleChanged}) => {
  return <Stack justifyContent='space-between' sx={{height: '93.5vh'}}>
    <Box>
      <Box mb={2}>
        <SectionTitle titleKey="Estilo Mapa Base"/>
        <BaseMapList
          styles={MAPSTYLES}
          selectedStyleUrl={mapStyle}
          onStyleChange={onMapStyleChanged}
          typographyStyleProps={{fontSize: 14}}
        />
      </Box>
      <p>{VISITED_FEATURES}</p>
      <Box mb={2}>
        <SectionTitle titleKey="Leyenda"/>
        <MapLegend
          fields={LEGEND}
          sx={{
            '& .MapLegend-swatch': {
              margin: '0px 8px 0px 0px',
              width: 20,
            },
            '& .MapLegend-text': {
              fontSize: 14
            }
          }}
        />
      </Box>
    </Box>
  </Stack>;
};

SidePanelContent.propTypes = {
  mapStyle: PropTypes.string.isRequired,
  onMapStyleChanged: PropTypes.func.isRequired
};

export default SidePanelContent;