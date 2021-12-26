import React from 'react';
import MapLegend from './MapLegend';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import {LEGEND} from '../config';

export default {
  title: 'SidePanelContent/MapLegend',
  component: MapLegend,
};

const fields = LEGEND;
const symbols = LEGEND;

const Template = (args) => <MapLegend {...args} />;

export const Default = Template.bind({});
Default.args = {
  fields,
};

export const Symbol = Template.bind({});
Symbol.args = {
  fields: symbols,
  sx: {
    '& .MapLegend-swatch': {
      marginLeft: 0
    }
  }
};

export const SymbolDense = Template.bind({});
SymbolDense.args = {
  fields: symbols,
  sx: {
    '& .MapLegend-swatch': {
      margin: '0px 8px 0px 0px',
      width: 20,
    },
    '& .MapLegend-text': {
      fontSize: 14
    }
  }
};