import React, { useState } from "react";
import { IconUser } from "@tabler/icons-react";
import { Box, IconButton, useTheme } from "@mui/material";
import UserMenu from "../../userDropDownMenu/UserMenu";

function UserManagementButton() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleUserIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const styles = {
    containerBox: {
      padding: "0 0 0 16px",
    },
  };

  return (
    <Box sx={styles.containerBox}>
      <IconButton onClick={handleUserIconClick}>
        <IconUser color={theme.palette.primaryDark.main} />
      </IconButton>
      <UserMenu
        open={open}
        anchorEl={anchorEl}
        handleCloseMenu={handleCloseMenu}
      />
    </Box>
  );
}

export default UserManagementButton;
