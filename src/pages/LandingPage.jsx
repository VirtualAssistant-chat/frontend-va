import React from "react";
import { useNavigate } from "react-router-dom";

import { Grid } from "@mui/material";
import ContentSection from "../features/landing/components/ContentSection";
import ImageSection from "../features/landing/components/ImageSection";

function LandingPage() {
  const navigate = useNavigate();
  const chatRoute = "chat";

  const handleGetStarted = () => {
    navigate(chatRoute);
  };

  const styles = {
    container: {
      height: "100%",
      position: "absolute",
    },
  };

  return (
    <Grid container style={styles.container}>
      <Grid container spacing={2}>
        <ContentSection handleGetStarted={handleGetStarted} />
        <ImageSection />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
