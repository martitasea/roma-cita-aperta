import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styled from '@mui/styles/styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import ResponsiveHeader from '@geomatico/geocomponents/ResponsiveHeader';
import SidePanel from '@geomatico/geocomponents/SidePanel';

import {WIDESCREEN_STEP, DRAWER_WIDTH} from '../config';

const MainContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'leftDrawer'
})(({theme, leftDrawer}) => ({
  flexGrow: 1,
  padding: 0,
  position: 'absolute',
  top: theme.mixins.toolbar.minHeight,
  bottom: 0,
  right: 0,
  left: leftDrawer ? DRAWER_WIDTH : 0
}));

const Layout = ({headerLogo, headerTitle, mainContent, sidePanelContent}) => {
  const widescreen = useMediaQuery(`(min-width: ${WIDESCREEN_STEP})`, {noSsr: true});
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

  const handleClose = () => setIsSidePanelOpen(!isSidePanelOpen);
  return (
    <>
      <ResponsiveHeader
        logo={headerLogo}
        title={headerTitle}
        onStartIconClick={widescreen ? undefined : handleClose}
        logoStyleProps={{width: 'auto'}}
      >
      </ResponsiveHeader>
      <SidePanel
        drawerWidth={DRAWER_WIDTH}
        anchor='left'
        isOpen={isSidePanelOpen}
        onClose={handleClose}
        widescreen={widescreen}
      >
        {sidePanelContent}
      </SidePanel>
      <MainContent leftDrawer={isSidePanelOpen && widescreen}>
        {mainContent}
      </MainContent>
    </>
  );
};

Layout.propTypes = {
  headerLogo: PropTypes.element,
  headerTitle: PropTypes.string.isRequired,
  sidePanelContent: PropTypes.element.isRequired,
  mainContent: PropTypes.element.isRequired
};

export default Layout;