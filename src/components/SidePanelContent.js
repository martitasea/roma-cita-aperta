import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import BaseMapList from '@geomatico/geocomponents/BaseMapList';
import MapLegend from '@geomatico/geocomponents/MapLegend';

import SectionTitle from './SectionTitle';

import {LEGEND, MAPSTYLES} from '../config';
import AutocompleteInput from './AutocompleteInput';

const SidePanelContent = ({mapStyle, onMapStyleChanged, featuresName, onFeatureSelect}) => {
  return <Stack justifyContent="space-between" sx={{height: '85vh'}}>
    <Box>
      <AutocompleteInput featuresName={featuresName} onFeatureSelect={onFeatureSelect}/>
      <Box>
        <SectionTitle titleKey="Estilo Mapa Base"/>
        <BaseMapList
          styles={MAPSTYLES}
          selectedStyleUrl={mapStyle}
          onStyleChange={onMapStyleChanged}
          typographyStyleProps={{fontSize: 14}}
        />
      </Box>
      <Box>
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
  featuresName: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    viewport: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    })
  })).isRequired,
  mapStyle: PropTypes.string.isRequired,
  onMapStyleChanged: PropTypes.func.isRequired,
  onFeatureSelect: PropTypes.func.isRequired
};

export default SidePanelContent;