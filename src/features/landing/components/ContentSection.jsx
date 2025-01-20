import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import FilledButtonDark from "../../../common/buttons/FilledButtonDark";
import {
  LANDING_TEXT_CONTENT,
  LANDING_TITLE,
  GET_STARTED_BUTTON_TITLE,
} from "../../../constants/landing/ContentSectionConstants";

function ContentSection({ handleGetStarted }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const styles = {
    contentBox: {
      p: 4,
      marginLeft: "8.125%",
      textAlign: "left",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    title: {
      variant: isMobile ? "h2_32" : "h1_64",
    },
    contentText: {
      variant: isMobile ? "h8_12" : "h3_18",
    },
    description: {
      paddingTop: "10px",
      width: "100%",
    },
    containerButton: {
      paddingTop: "26px",
    },
  };

  return (
    <Grid item xs={12} md={6}>
      <Box
        style={styles.contentBox}
        p={styles.contentBox.p}
        bgcolor={theme.palette.white.main}
      >
        <Typography
          variant={styles.title.variant}
          color={theme.palette.text.primary}
        >
          {LANDING_TITLE}
        </Typography>
        <Typography
          variant={styles.contentText.variant}
          sx={styles.description}
          color={theme.palette.text.primary}
        >
          {LANDING_TEXT_CONTENT}
        </Typography>
        <Box style={styles.containerButton}>
          <FilledButtonDark
            text={GET_STARTED_BUTTON_TITLE}
            onClick={handleGetStarted}
          />
        </Box>
      </Box>
    </Grid>
  );
}

ContentSection.propTypes = {
  handleGetStarted: PropTypes.func.isRequired,
};

export default ContentSection;
