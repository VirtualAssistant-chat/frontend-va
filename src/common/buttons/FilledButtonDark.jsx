import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

function FilledButtonDark({ text, onClick, icon }) {
  return (
    <Button
      variant="contained"
      endIcon={icon}
      onClick={onClick}
      color="primaryDark"
    >
      {text}
    </Button>
  );
}

FilledButtonDark.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
};

FilledButtonDark.defaultProps = {
  icon: null,
};

export default FilledButtonDark;
