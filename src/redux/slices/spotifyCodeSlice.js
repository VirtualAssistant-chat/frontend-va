import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const spotifyCodeSlice = createSlice({
  name: "spotifyCode",
  initialState,
  reducers: {
    setSpotifyCode: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSpotifyCode } = spotifyCodeSlice.actions;

export const selectSpotifyCode = (state) => state.spotifyCode;

export default spotifyCodeSlice.reducer;
