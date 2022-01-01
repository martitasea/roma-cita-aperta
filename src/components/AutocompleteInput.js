import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const AutocompleteInput = ({featuresName, onFeatureSelect}) => {
  const handleFeatureSelect = (e, feature) => onFeatureSelect(feature);
  return <>
    <Autocomplete
      options={featuresName}
      disablePortal
      autoSelect
      fullWidth
      renderInput={(params) => <TextField {...params} label="Búsquedas" sx={{width: '100%'}}/>}
      onChange={handleFeatureSelect}
    />
  </>;
};

AutocompleteInput.propTypes = {
  featuresName: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    viewport: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    })
  })).isRequired,
  onFeatureSelect: PropTypes.func.isRequired
};

AutocompleteInput.defaultProps = {};

export default AutocompleteInput;