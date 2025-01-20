import React from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import SuggestionsButton from "../suggestionButton.jsx/SuggestionsButton";
import {
  GET_STARTER_VIRTUAL_ASSISTANT,
  GET_STARTER_HELP,
  GET_STARTER_PLAY,
  GET_STARTER_REMIND,
  GET_STARTER_WPP,
  GET_STARTER_SCHEDULE,
} from "../../../../constants/mainPage/getStarterSectionCons";

function GetStarter() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const styles = {
    contentBox: {
      textAlign: "center",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    suggestions: {
      paddingTop: "10px",
      width: "100%",
    },
    contentTitle: {
      marginBottom: "17.67vh",
    },
    helpTitle: {
      marginTop: "7.57vh",
    },
    suggestionsContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };

  return (
    <Container>
      <Box style={styles.contentBox} p={styles.contentBox.p}>
        <Typography
          variant={isMobile ? "h3_28" : "h2_32"}
          color={theme.palette.text.primary}
          style={styles.contentTitle}
        >
          {GET_STARTER_VIRTUAL_ASSISTANT}
        </Typography>
        <Box>
          <Typography
            variant={isMobile ? "h4_16" : "h3_18"}
            color={theme.palette.text.primary}
            style={styles.helpTitle}
          >
            {GET_STARTER_HELP}
          </Typography>
          <Container style={styles.suggestionsContainer}>
            <SuggestionsButton text={GET_STARTER_PLAY} />
            <SuggestionsButton text={GET_STARTER_REMIND} />
            <SuggestionsButton text={GET_STARTER_WPP} />
            <SuggestionsButton text={GET_STARTER_SCHEDULE} />
          </Container>
        </Box>
      </Box>
    </Container>
  );
}

export default GetStarter;
