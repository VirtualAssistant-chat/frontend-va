import apiService from "./apiService";
import { USER_ID } from "../../constants/user/mokedUserCons";
import API_BASE_URL from "../../constants/api/api";

const baseUrl = "https://accounts.spotify.com/api/token";

const saveAccessToken = async (token) => {
  const endpoint = "user";
  const bodyData = {
    idGoogle: null,
    idUser: USER_ID,
    spotifyToken: token,
  };

  const service = apiService(API_BASE_URL, endpoint);
  await service.put(USER_ID, bodyData);
};

const createAccessToken = async (code) => {
  const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${btoa(
      `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`,
    )}`,
  };
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
  });

  const newToken = await fetch(baseUrl, {
    method: "POST",
    headers,
    body,
  })
    .then((response) => response.json())
    .then((data) => data.access_token);

  saveAccessToken(newToken);

  return newToken;
};

const getAccessToken = async (code) => {
  return createAccessToken(code);
};

export default getAccessToken;
