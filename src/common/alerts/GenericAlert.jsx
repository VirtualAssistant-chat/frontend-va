import React from "react";
import PropTypes from "prop-types";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import {
  MARGIN_BOTTOM,
  SNACKBAR_ANCHOR_ORIGIN,
  SNACKBAR_DURATION,
} from "../../constants/alerts/GenericAlertConstants";

function GenericAlert({
  isSuccessful,
  title,
  message,
  onCloseSuccessful,
  severity,
  index,
}) {
  const styles = { snackbarContainer: { marginBottom: index * MARGIN_BOTTOM } };

  return (
    <Snackbar
      open={isSuccessful}
      autoHideDuration={SNACKBAR_DURATION}
      anchorOrigin={SNACKBAR_ANCHOR_ORIGIN}
      onClose={onCloseSuccessful}
      style={styles.snackbarContainer}
    >
      <Alert severity={severity} onClose={onCloseSuccessful}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
}

GenericAlert.propTypes = {
  isSuccessful: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onCloseSuccessful: PropTypes.func.isRequired,
  severity: PropTypes.string.isRequired,
  index: PropTypes.number,
};

GenericAlert.defaultProps = {
  index: 0,
};

export default GenericAlert;
