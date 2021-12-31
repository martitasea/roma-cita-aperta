import React from 'react';
import SidePanel from './SidePanel';
import Box from '@mui/material/Box';

export default {
  title: 'Common/SidePanel',
  component: SidePanel
};

const Template = args => <SidePanel {...args}/>;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  sidePanelContent: <Box sx={{width: '370px', height: '700px', backgroundColor: 'red'}}>HOla</Box>
};