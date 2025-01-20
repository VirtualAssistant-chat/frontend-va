import React from "react";
import { Grid, Divider, MenuItem, Typography } from "@mui/material";
import MenuUserInfo from "./MenuUserInfo";
import {
  LOG_OUT,
  MANAGE_ACCOUNT,
} from "../../constants/userMenu/UserManagement";

function UserMenuContent() {
  return (
    <Grid>
      <MenuUserInfo />
      <Divider orientation="horizontal" flexItem />
      <MenuItem>
        <Typography variant="h7_12"> {MANAGE_ACCOUNT} </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="h7_12"> {LOG_OUT} </Typography>
      </MenuItem>
    </Grid>
  );
}

export default UserMenuContent;
