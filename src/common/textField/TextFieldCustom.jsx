import React from "react";
import PropTypes from "prop-types";

import {
  Box,
  InputLabel,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

function TextFieldCustom({ label, text, setText, required }) {
  const theme = useTheme();

  const styles = {
    textFieldContainer: { display: "flex", flexDirection: "column" },
    textField: {
      borderRadius: "12px",
    },
  };

  return (
    <Box sx={styles.textFieldContainer}>
      <InputLabel htmlFor="title-field">
        <Typography variant="h6_14" color={theme.palette.text.primary}>
          {label}
        </Typography>
      </InputLabel>
      <TextField
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        required={required}
        InputProps={{
          style: styles.textField,
        }}
      />
    </Box>
  );
}

TextFieldCustom.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

TextFieldCustom.defaultProps = {
  required: false,
};

export default TextFieldCustom;
