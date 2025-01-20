import { configureStore } from "@reduxjs/toolkit";
import alertsReducer from "./slices/alertsSlice";
import chatReducer from "./slices/conversationSlice";
import chatFieldHeightReducer from "./slices/chatFieldHeightSlice";
import spotifyCodeReducer from "./slices/spotifyCodeSlice";

const store = configureStore({
  reducer: {
    alerts: alertsReducer,
    chat: chatReducer,
    chatFieldHeight: chatFieldHeightReducer,
    spotifyCode: spotifyCodeReducer,
  },
});

export default store;
