import React from 'react';
import SectionTitle from './SectionTitle';

export default {
  title: 'SidePanel/SectionTitle',
  component: SectionTitle,
};

const Template = (args) => <SectionTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  titleKey: 'baseMapStyle',
};
