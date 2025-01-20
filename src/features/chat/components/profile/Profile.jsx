import React from "react";
import PropTypes from "prop-types";

import { Avatar, useTheme } from "@mui/material";
import { IconUser, IconWaveSine } from "@tabler/icons-react";

function Profile({ isUser }) {
  const theme = useTheme();

  const styles = { avatar: { backgroundColor: theme.palette.grey.dark } };

  return (
    <Avatar sx={styles.avatar}>
      {isUser ? <IconUser /> : <IconWaveSine />}
    </Avatar>
  );
}

Profile.propTypes = {
  isUser: PropTypes.bool.isRequired,
};

export default Profile;
