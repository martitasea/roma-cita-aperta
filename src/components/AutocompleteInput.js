import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const AutocompleteInput = ({featuresList, selectedFeature, onFeatureSelect}) => {
  const handleFeatureSelect = (e, feature) => onFeatureSelect(feature);
  return <>
    <Autocomplete
      options={featuresList}
      renderInput={(params) => <TextField {...params} label="Volar a..." sx={{width: '100%'}}/>}
      getOptionLabel={option => option.label || ''}
      value={selectedFeature}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={handleFeatureSelect}
      autoComplete
      fullWidth
    />
  </>;
};

AutocompleteInput.propTypes = {
  featuresList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  })).isRequired,
  onFeatureSelect: PropTypes.func.isRequired,
  selectedFeature: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  }),
};

AutocompleteInput.defaultProps = {
  selectedFeature: null
};

export default AutocompleteInput;