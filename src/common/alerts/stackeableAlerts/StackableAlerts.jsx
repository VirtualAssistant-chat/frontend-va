import React from "react";
import PropTypes from "prop-types";
import GenericAlert from "../GenericAlert";

function StackableAlerts({ alerts, handleAlertClose }) {
  const filteredAlerts = alerts.filter((alert) => alert.isSuccessful);
  return (
    <>
      {filteredAlerts.map(
        ({ key, title, message, isSuccessful, severity }, index) => (
          <GenericAlert
            key={key}
            title={title}
            message={message}
            isSuccessful={isSuccessful}
            onCloseSuccessful={handleAlertClose(key)}
            severity={severity}
            index={index}
          />
        ),
      )}
    </>
  );
}

StackableAlerts.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      isSuccessful: PropTypes.bool.isRequired,
      severity: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleAlertClose: PropTypes.func.isRequired,
};

export default StackableAlerts;
