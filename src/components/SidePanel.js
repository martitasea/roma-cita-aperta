import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import {WIDESCREEN_STEP, DRAWER_WIDTH} from '../config';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SidePanel = ({sidePanelContent, isOpen, onClose}) => {
  const widescreen = useMediaQuery(`(min-width: ${WIDESCREEN_STEP})`, {noSsr: true});
  const handleSidePanelClose = () => onClose && onClose();
  return <>
    <IconButton sx={{position: 'absolute', left: 10, top: 10, zIndex: 1300, color: widescreen? 'white' : isOpen? 'white' : 'black'}} onClick={handleSidePanelClose}>
      <MenuIcon size="large"/>
    </IconButton>
    <Drawer
      anchor='left'
      open={isOpen}
      PaperProps={{sx:{width: widescreen? DRAWER_WIDTH : '90%'}}}
      onClose={handleSidePanelClose}
    >
      <Box sx={{width: '100%', height: '60px', backgroundColor: 'primary.main'}}>
        <Typography variant='h6' sx={{color: 'white', position: 'absolute', left: 48, top: 16}}>ROMA CITÁ APERTA</Typography>
      </Box>
      <Box m={2}>
        {sidePanelContent}
      </Box>
    </Drawer>
  </>;
};

SidePanel.propTypes = {
  sidePanelContent: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

SidePanel.defaultProps = {};

export default SidePanel;