import React from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "@mui/material";

function FilledButton({ text, onClick, icon, type }) {
  const styles = {
    button: {
      padding: "8px 16px",
      borderRadius: "6px",
      textTransform: "none",
    },
  };

  return (
    <Button
      variant="contained"
      endIcon={icon}
      type={type}
      onClick={onClick}
      style={styles.button}
      color="primary"
    >
      <Typography variant="h4_16">{text}</Typography>
    </Button>
  );
}

FilledButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
  type: PropTypes.string,
};

FilledButton.defaultProps = {
  icon: null,
  type: "",
};

export default FilledButton;
