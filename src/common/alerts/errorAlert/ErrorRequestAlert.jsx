import React from "react";
import PropTypes from "prop-types";
import { Alert, AlertTitle } from "@mui/material";
import ERROR_SEVERITY from "../../../constants/alerts/ErrorRequestAlertConstants";

function ErrorAlert({ httpError, onCloseAlert }) {
  if (!httpError) {
    return null;
  }

  return (
    <Alert severity={ERROR_SEVERITY} onClose={onCloseAlert}>
      <AlertTitle>{httpError.code} Error</AlertTitle>
      <ul>
        {httpError.errors.map((err) => (
          <li key={err.id || err.message}>{err.message}</li>
        ))}
      </ul>
    </Alert>
  );
}

ErrorAlert.propTypes = {
  httpError: PropTypes.shape({
    code: PropTypes.number.isRequired,
    errors: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }),
  onCloseAlert: PropTypes.func.isRequired,
};

ErrorAlert.defaultProps = {
  httpError: {},
};

export default ErrorAlert;
