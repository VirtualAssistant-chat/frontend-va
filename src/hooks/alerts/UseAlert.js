import { useContext } from "react";
import AlertsContext from "./AlertsContext";

const useAlertsContext = () => {
  const { alert } = useContext(AlertsContext);
  return alert;
};

export default useAlertsContext;
