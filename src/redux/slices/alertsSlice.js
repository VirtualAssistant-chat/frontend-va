import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alerts: [],
};

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert: (state, action) => {
      const { title, message, severity } = action.payload;
      state.alerts.push({
        key: uuidv4(),
        isSuccessful: true,
        title,
        message,
        severity,
      });
    },
    removeAlert: (state, action) => {
      state.alerts = state.alerts.filter(
        (alert) => alert.key !== action.payload,
      );
    },
  },
});

export const { addAlert, removeAlert } = alertsSlice.actions;

export const selectAlerts = (state) => state.alerts;

export default alertsSlice.reducer;
