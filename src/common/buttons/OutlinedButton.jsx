import React from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "@mui/material";

function OutlinedButtonDark({ text, onClick, icon }) {
  const styles = {
    button: {
      whiteSpace: "nowrap",
    },
  };
  return (
    <Button
      variant="outlined"
      endIcon={icon}
      onClick={onClick}
      color="primary"
      sx={styles.button}
    >
      <Typography> {text} </Typography>
    </Button>
  );
}

OutlinedButtonDark.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
};

OutlinedButtonDark.defaultProps = {
  icon: null,
};

export default OutlinedButtonDark;
