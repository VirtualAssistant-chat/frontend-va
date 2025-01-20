import React from "react";

import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import TextCard from "../textCard/TextCard";
import Profile from "../profile/Profile";

function MessageComponent({ message, isUser }) {
  const alignComponent = isUser ? "flex-end" : "flex-start";

  const styles = {
    messageComponent: {
      justifyContent: alignComponent,
      alignItems: "flex-start",
      padding: "10px 0",
    },
    textCard: { justifyContent: alignComponent },
  };

  return (
    <Grid container spacing={1} sx={styles.messageComponent}>
      {!isUser && (
        <Grid item>
          <Profile isUser={isUser} />
        </Grid>
      )}
      <Grid item sx={styles.textCard}>
        <TextCard message={message} isUser={isUser} />
      </Grid>
      {isUser && (
        <Grid item>
          <Profile isUser={isUser} />
        </Grid>
      )}
    </Grid>
  );
}

MessageComponent.propTypes = {
  message: PropTypes.string.isRequired,
  isUser: PropTypes.bool,
};

MessageComponent.defaultProps = {
  isUser: false,
};
export default MessageComponent;
