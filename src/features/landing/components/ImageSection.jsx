import React from "react";
import { Box, Grid, useTheme } from "@mui/material";
import homeImage from "../../../assets/HomeImage.svg";

function ImageSection() {
  const theme = useTheme();

  const styles = {
    imageBox: {
      p: 4,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
      objectFit: "contain",
    },
  };

  return (
    <Grid item xs={12} md={6}>
      <Box
        style={styles.imageBox}
        p={styles.imageBox.p}
        bgcolor={theme.palette.white.main}
      >
        <img src={homeImage} alt="Voice Assistant" style={styles.image} />
      </Box>
    </Grid>
  );
}

export default ImageSection;
