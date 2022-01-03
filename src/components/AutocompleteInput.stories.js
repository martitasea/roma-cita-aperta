import React from 'react';
import AutocompleteInput from './AutocompleteInput';
import Box from '@mui/material/Box';

export default {
  title: 'SidePanel/AutocompleteInput',
  component: AutocompleteInput
};

const Template = args => <Box m={2}>
  <AutocompleteInput {...args}/>
</Box>;

export const Default = Template.bind({});
Default.args = {
  featuresList: [
    {
      id: 1,
      label: 'opcion1',
    },
    {
      id: 2,
      label: 'apcion2',
    },
    {
      id: 3,
      label: 'bpcion3',
    },
  ],
  selectedFeature: {
    id: 2,
    label: 'apcion2',
  },
};