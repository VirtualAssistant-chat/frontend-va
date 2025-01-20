import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { IconSettings2 } from "@tabler/icons-react";

function SettingsButton() {
  const theme = useTheme();

  const styles = {
    containerBox: {
      padding: "0 0 0 16px",
    },
  };

  return (
    <Box style={styles.containerBox}>
      <IconButton>
        <IconSettings2 color={theme.palette.primaryDark.main} />
      </IconButton>
    </Box>
  );
}

export default SettingsButton;
