import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import {LEGEND} from '../config';

const classes = {
  root: 'MapLegend-root',
  item: 'MapLegend-item',
  swatch: 'MapLegend-swatch',
  text: 'MapLegend-text',
};

const Root = styled(List)({
  '& .MapLegend-item': {
    margin: 0,
    padding: 0
  },
  '& .MapLegend-swatch': {
    margin: '4px 8px',
    padding: 0,
    width: '40px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const MapLegend = ({fields, sx, onLayerVisibility}) => {
  const [selectedVisibleLayers, setSelectedVisibleLayers] = useState(LEGEND.map(type => type.id));
  const handleLayersVisibility = {
    ...selectedVisibleLayers,

  };
  return (
    <Root dense className={classes.root} sx={sx} fields={fields}>
      {
        fields.map(({id, name, type, paint, icon}, index) => {
          const swatchVisible = {
            border: paint?.outlineWidth || undefined,
            borderColor: paint?.outlineColor || undefined,
            bgcolor: paint?.color || undefined,
            borderRadius: type === 'symbol' ? '50%' : 0,
            width: type === 'symbol' ? paint.width : '100%',
            height: type === 'line' || type === 'symbol' ? paint.width : '100%'
          };
          const swatchInvisible = {
            border: paint?.outlineWidth || undefined,
            borderColor: paint?.outlineColor || undefined,
            bgcolor: 'transparent',
            borderRadius: type === 'symbol' ? '50%' : 0,
            width: type === 'symbol' ? paint.width : '100%',
            height: type === 'line' || type === 'symbol' ? paint.width : '100%'
          };
          return (
            <ListItem className={classes.item} key={index}>
              <Box className={classes.swatch} onClick={(e) => handleLayersVisibility(e, id)}>
                {
                  type === 'icon' ? icon :
                    <Box sx={selectedVisibleLayers.includes(id) ? swatchVisible : swatchInvisible}/>
                }
              </Box>
              <ListItemText sx={{m: 0, p: 0}}>
                <Typography className={classes.text}>{name}</Typography>
              </ListItemText>
            </ListItem>
          );
        })
      }
    </Root>
  );
};

MapLegend.propTypes = {
  sx: PropTypes.object,
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['line', 'fill', 'symbol', 'icon']).isRequired,
    paint: PropTypes.object,
    icon: PropTypes.element,
  })).isRequired,
  onLayerVisibility: PropTypes.func
};

MapLegend.defaultProps = {
  sx: {},
};

export default MapLegend;