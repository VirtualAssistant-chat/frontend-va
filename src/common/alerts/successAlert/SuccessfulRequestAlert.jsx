import React from "react";
import PropTypes from "prop-types";

import GenericAlert from "../GenericAlert";
import SUCCESS_SEVERITY from "../../../constants/alerts/SuccessfulRequestAlertConstants";

function SuccessfulRequestAlert({
  isSuccessful,
  title,
  message,
  onCloseSuccessful,
}) {
  return (
    <GenericAlert
      isSuccessful={isSuccessful}
      title={title}
      message={message}
      onCloseSuccessful={onCloseSuccessful}
      severity={SUCCESS_SEVERITY}
    />
  );
}

SuccessfulRequestAlert.propTypes = {
  isSuccessful: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onCloseSuccessful: PropTypes.func.isRequired,
};

export default SuccessfulRequestAlert;
