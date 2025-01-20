import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import AlertsContext from "./AlertsContext";
import StackableAlerts from "../../common/alerts/stackeableAlerts/StackableAlerts";
import {
  ALERT_EVENT_CLOSE,
  ERROR_SEVERITY,
  INFO_SEVERITY,
  SUCCESS_SEVERITY,
  WARNING_SEVERITY,
} from "../../constants/alerts/AlertsProviderConstants";
import { addAlert, removeAlert } from "../../redux/slices/alertsSlice";

function AlertsProvider({ children }) {
  const dispatch = useDispatch();
  const alerts = useSelector((state) => state.alerts.alerts);

  const handleAlertOpen = useCallback(
    (newAlert) => {
      dispatch(addAlert(newAlert));
    },
    [dispatch],
  );

  const alert = useMemo(
    () => ({
      error: (title, message) =>
        handleAlertOpen({ title, message, severity: ERROR_SEVERITY }),
      success: (title, message) =>
        handleAlertOpen({ title, message, severity: SUCCESS_SEVERITY }),
      info: (title, message) =>
        handleAlertOpen({ title, message, severity: INFO_SEVERITY }),
      warning: (title, message) =>
        handleAlertOpen({ title, message, severity: WARNING_SEVERITY }),
    }),
    [handleAlertOpen],
  );

  const handleAlertClose = useCallback(
    (key) => {
      return (event, reason) => {
        if (reason === ALERT_EVENT_CLOSE) {
          return;
        }
        dispatch(removeAlert(key));
      };
    },
    [dispatch],
  );

  const contextValue = useMemo(
    () => ({
      alert,
      alerts,
      handleAlertOpen,
      handleAlertClose,
    }),
    [alert, alerts, handleAlertOpen, handleAlertClose],
  );

  return (
    <AlertsContext.Provider value={contextValue}>
      {children}
      <StackableAlerts alerts={alerts} handleAlertClose={handleAlertClose} />
    </AlertsContext.Provider>
  );
}

AlertsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AlertsProvider;
