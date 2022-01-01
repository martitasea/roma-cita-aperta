import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styled from '@mui/styles/styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import ResponsiveHeader from '@geomatico/geocomponents/ResponsiveHeader';
import SidePanel from './SidePanel';

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

  const handleSidePanelOpen = () => setIsSidePanelOpen(!isSidePanelOpen);
  return (
    <>
      {widescreen && <ResponsiveHeader
        logo={headerLogo}
        title={headerTitle}
        onStartIconClick={widescreen ? undefined : handleSidePanelOpen}
        logoStyleProps={{width: 'auto', marginLeft: 5}}
      >
      </ResponsiveHeader>
      }
      <SidePanel
        isOpen={isSidePanelOpen}
        onClose={handleSidePanelOpen}
        sidePanelContent={sidePanelContent}
      >
      </SidePanel>
      <MainContent leftDrawer={isSidePanelOpen && widescreen} style={{top: 0}} onSidePanelOpen={(e) => console.log(e)}>
        {mainContent}
      </MainContent>
    </>
  );
};

Layout.propTypes = {
  headerLogo: PropTypes.element,
  headerTitle: PropTypes.string.isRequired,
  sidePanelContent: PropTypes.element.isRequired,
  mainContent: PropTypes.element.isRequired,
};

export default Layout;