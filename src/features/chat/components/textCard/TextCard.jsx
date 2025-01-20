import React from "react";

import PropTypes from "prop-types";
import { Card, CardContent, Typography, useTheme } from "@mui/material";

function TextCard({ message, isUser }) {
  const theme = useTheme();

  const styles = {
    bubbleStyle: {
      maxWidth: "50.10vw",
      backgroundColor: isUser
        ? theme.palette.grey.light
        : theme.palette.selectedOption.main,
      borderRadius: "12px 12px 12px 12px",
    },
    cardContent: { width: "100%" },
    textCard: { color: theme.palette.text.primary, alignItems: "center" },
  };

  return (
    <Card sx={styles.bubbleStyle} elevation={0}>
      <CardContent sx={styles.cardContent}>
        <Typography sx={styles.textCard}>{message}</Typography>
      </CardContent>
    </Card>
  );
}

TextCard.propTypes = {
  message: PropTypes.string.isRequired,
  isUser: PropTypes.bool.isRequired,
};

export default TextCard;
