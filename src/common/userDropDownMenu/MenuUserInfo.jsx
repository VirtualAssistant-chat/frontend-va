import React from "react";
import { useTheme } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { IconUser } from "@tabler/icons-react";
import { USER_NAME, USER_EMAIL } from "../../constants/user/mokedUserCons";

function MenuUserInfo() {
  const theme = useTheme();

  const styles = {
    textInfoGrid: {
      paddingLeft: 16,
      alignItems: "left",
      display: "flex",
      flexDirection: "column",
    },
    generalInfoGrid: {
      padding: 16,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  };

  return (
    <Grid style={styles.generalInfoGrid}>
      <IconUser color={theme.palette.primaryDark.main} size="36px" />
      <Grid item container style={styles.textInfoGrid}>
        <Typography item variant="h7_12" color={theme.palette.text.primary}>
          {USER_NAME}
        </Typography>
        <Typography item variant="h8_10" color={theme.palette.text.primary}>
          {USER_EMAIL}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default MenuUserInfo;
