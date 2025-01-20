import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: [],
  reducers: {
    loadData: (state, action) => {
      if (action.payload.page === 0) {
        return action.payload.data;
      }
      return [...action.payload.data, ...state];
    },
    addRequest: (state, action) => {
      return [
        ...state,
        {
          textRequest: action.payload.data,
          textResponse: action.payload.response,
        },
      ];
    },
  },
});

export const { loadData, addRequest } = chatSlice.actions;
export const selectChatList = (state) => state.chat;
export default chatSlice.reducer;
