import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IconArrowBarRight } from "@tabler/icons-react";
import {
  Box,
  Typography,
  useTheme,
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import TOP_BAR_TITLE from "../../constants/topBar/TopBarSectionCons";
import UserManagementButton from "./UserManagement/UserManagementButton";
import SettingsButton from "./SettingsSection/SettingsButton";
import { DRAWER_WIDTH } from "../../constants/sideBar/contentSectionConst";
import { getContextById } from "../../app/services/contextService";
import SpotifyLogin from "../../features/spotify/components/SpotifyLogin";

function TopBarSection({ open, handleDrawerOpen, contextId }) {
  const theme = useTheme();
  const [title, setTitle] = useState(TOP_BAR_TITLE);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchTitle = async () => {
      if (contextId) {
        const response = await getContextById(contextId);
        setTitle(response.title);
      }
    };

    fetchTitle();
  }, [contextId]);

  const paddingLeftForCloseIcon = isMobile ? "16px" : "92px";

  const styles = {
    contentBox: {
      p: "1.2vh 1.5vw",
    },
    tBar: {
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    appBar: {
      width: open ? `calc(100vw - ${DRAWER_WIDTH}px)` : "100vw",
      boxShadow: theme.rectangle.shadow.boxShadow,
    },
    typography: {
      paddingLeft: open ? "0px" : paddingLeftForCloseIcon,
    },
    box: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
    },
  };

  return (
    <Box>
      <AppBar sx={styles.appBar}>
        <Box p={styles.contentBox.p} bgcolor={theme.palette.white.main}>
          <Toolbar style={styles.tBar}>
            <Box sx={styles.box}>
              {!open && (
                <IconButton onClick={handleDrawerOpen}>
                  <IconArrowBarRight />
                </IconButton>
              )}
              <Typography
                variant="h3_18"
                color={theme.palette.text.primary}
                sx={styles.typography}
              >
                {title}
              </Typography>
            </Box>
            <Box sx={styles.box}>
              <SpotifyLogin />
              <SettingsButton data-testid="settings-button" />
              <UserManagementButton data-testid="user-management-button" />
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}

TopBarSection.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  contextId: PropTypes.string,
};

TopBarSection.defaultProps = {
  contextId: null,
};

export default TopBarSection;
