import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IconBrandSpotify } from "@tabler/icons-react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import OutlinedButton from "../../../common/buttons/OutlinedButton";
import useAlert from "../../../hooks/alerts/UseAlert";
import {
  LOGIN_SPOTIFY_TITLE,
  SPOTIFY_CONNECT_SUCCESSFULLY,
  SPOTIFY_SCOPE,
} from "../../../constants/spotify/SpotifyLoginConstants";
import {
  setSpotifyCode,
  selectSpotifyCode,
} from "../../../redux/slices/spotifyCodeSlice";
import getAccessToken from "../../../app/services/spotifyService";

function SpotifyLogin() {
  const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}&scope=${SPOTIFY_SCOPE}`;
  const { search } = useLocation();
  const alert = useAlert();

  const spotifyCode = useSelector(selectSpotifyCode);

  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const code = urlParams.get("code");

    if (code) {
      dispatch(setSpotifyCode(code));
    }
  }, [search, dispatch]);

  useEffect(() => {
    if (spotifyCode) {
      getAccessToken(spotifyCode).then(() => {
        alert.success(LOGIN_SPOTIFY_TITLE, SPOTIFY_CONNECT_SUCCESSFULLY);
      });
    }
  }, [spotifyCode, alert]);

  const handleLoginSpotify = () => {
    window.location.replace(spotifyUrl);
  };

  const styles = {
    containerBox: {
      padding: "0 0 0 16px",
    },
  };

  return (
    <Box style={styles.containerBox}>
      <OutlinedButton
        icon={<IconBrandSpotify />}
        onClick={handleLoginSpotify}
        text={LOGIN_SPOTIFY_TITLE}
      />
    </Box>
  );
}

export default SpotifyLogin;
