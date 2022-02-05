import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import BaseMapList from '@geomatico/geocomponents/BaseMapList';
import MapLegend from '@geomatico/geocomponents/MapLegend';

import SectionTitle from './SectionTitle';

import {LEGEND, MAPSTYLES} from '../config';
import AutocompleteInput from './AutocompleteInput';
import Typography from '@mui/material/Typography';
import Hidden from '@mui/material/Hidden';

const SidePanelContent = ({mapStyle, onMapStyleChanged, featuresList, selectedFeature, onFeatureSelect}) => {
  return <Stack justifyContent="space-between" sx={{height: '81vh'}}>
    <Box>
      <Hidden smDown>
        <AutocompleteInput
          featuresList={featuresList}
          selectedFeature={selectedFeature}
          onFeatureSelect={onFeatureSelect}
        />
      </Hidden>
      <Box display='flex' alignItems='center' mt={2}>
        {/*<ColorSwitch/>*/}
        <Typography>Barrios de roma</Typography>
      </Box>
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
  featuresList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  })).isRequired,
  mapStyle: PropTypes.string.isRequired,
  onMapStyleChanged: PropTypes.func.isRequired,
  onFeatureSelect: PropTypes.func.isRequired,
  selectedFeature: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  }),
};

export default SidePanelContent;