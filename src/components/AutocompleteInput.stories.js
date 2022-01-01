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
  featuresName: [
    {
      label: 'opcion1'
    },
    {
      label: 'apcion1'
    },
    {
      label: 'bpcion1'
    },
  ]
};