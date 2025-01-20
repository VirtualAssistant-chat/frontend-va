import React from "react";
import ProtoTypes from "prop-types";
import { Button, useTheme, Typography } from "@mui/material";

function SuggestionsButton({ text, onSuggestionButtonClick }) {
  const theme = useTheme();

  const buttonStyle = {
    marginTop: "2.88vh",
    marginButton: "2.88vh",
    textTransform: "none",
    padding: "1.92vh 5.08vw",
  };

  return (
    <Button
      onClick={onSuggestionButtonClick}
      variant="outlined"
      style={buttonStyle}
      size="large"
      disabled
    >
      <Typography variant="h6_14" color={theme.palette.grey.main}>
        {text}
      </Typography>
    </Button>
  );
}

SuggestionsButton.propTypes = {
  text: ProtoTypes.string.isRequired,
  onSuggestionButtonClick: ProtoTypes.func,
};

SuggestionsButton.defaultProps = {
  onSuggestionButtonClick: () => {},
};

export default SuggestionsButton;
