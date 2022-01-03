import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import {WIDESCREEN_STEP, DRAWER_WIDTH} from '../config';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, IconButton, Toolbar} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SidePanel = ({sidePanelContent, isOpen, onClose}) => {
  const widescreen = useMediaQuery(`(min-width: ${WIDESCREEN_STEP})`, {noSsr: true});
  const handleSidePanelClose = () => onClose && onClose();
  return <>
    {
      widescreen || !isOpen ?
        <IconButton
          sx={{position: 'absolute', left: 8, top: 8, zIndex: 1300, color: widescreen ? 'white' : 'black'}}
          onClick={handleSidePanelClose}>
          <MenuIcon size="large"/>
        </IconButton> : undefined
    }
    <Drawer
      anchor='left'
      open={isOpen}
      PaperProps={{sx: {width: widescreen ? DRAWER_WIDTH : '90%'}}}
      onClose={handleSidePanelClose}
    >
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            onClick={handleSidePanelClose}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant='h6' component='div' sx={{color: 'white', pt: 0.25}}>
            ROMA CITÁ APERTA
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{p:2}}>
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