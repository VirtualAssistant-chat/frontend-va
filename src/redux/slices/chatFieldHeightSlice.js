import { createSlice } from "@reduxjs/toolkit";

const chatFieldHeightSlice = createSlice({
  name: "chatFieldHeight",
  initialState: 28,
  reducers: {
    setChatFieldHeight: (state, action) => {
      return action.payload;
    },
  },
});

export const { setChatFieldHeight } = chatFieldHeightSlice.actions;

export const selectChatFieldHeight = (state) => state.chatFieldHeight;
export default chatFieldHeightSlice.reducer;
