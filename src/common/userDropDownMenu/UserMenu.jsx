import React from "react";
import { Menu, useTheme } from "@mui/material";
import ProtoTypes from "prop-types";
import UserMenuContent from "./UserMenuContent";

function UserMenu({ open, anchorEl, handleCloseMenu }) {
  const theme = useTheme();

  const styles = {
    anchorOrigins: {
      vertical: "bottom",
      horizontal: "center",
    },
    transformOrigins: {
      vertical: "top",
      horizontal: "center",
    },
    menuStyle: {
      boxShadow: theme.rectangle.shadow.boxShadow,
    },
  };

  return (
    <Menu
      id="user-management-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleCloseMenu}
      anchorOrigin={styles.anchorOrigins}
      transformOrigin={styles.transformOrigins}
      slotProps={{
        paper: { style: { boxShadow: theme.rectangle.shadow.boxShadow } },
      }}
    >
      <UserMenuContent />
    </Menu>
  );
}

UserMenu.propTypes = {
  open: ProtoTypes.bool.isRequired,
  anchorEl: ProtoTypes.instanceOf(HTMLElement),
  handleCloseMenu: ProtoTypes.func.isRequired,
};

UserMenu.defaultProps = {
  anchorEl: null,
};

export default UserMenu;
