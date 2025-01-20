import React from "react";

import { Grid, Skeleton } from "@mui/material";
import PropTypes from "prop-types";
import {
  SKELETON_MOCKED_PROFILE_TYPE,
  SKELETON_MOCKED_TEXT_TYPE,
  TEST_ID,
} from "../../../../constants/chat/MessageSkeletonConstants";

function MessageSkeleton({ isUser }) {
  const alignComponent = isUser ? "flex-end" : "flex-start";

  const styles = {
    messageComponent: {
      justifyContent: alignComponent,
      alignItems: "flex-start",
      padding: "10px 0",
    },
    textCard: { justifyContent: alignComponent },
    skeletonProfile: {
      width: 40,
      height: 40,
    },
    skeletonText: {
      maxWidth: "744px",
      width: "48.75vw",
      height: 200,
      borderRadius: "12px 12px 12px 12px",
    },
  };

  return (
    <Grid container spacing={1} sx={styles.messageComponent}>
      {!isUser && (
        <Grid item>
          <Skeleton
            data-testid={TEST_ID.ASSISTANT_PROFILE}
            variant={SKELETON_MOCKED_PROFILE_TYPE}
            sx={styles.skeletonProfile}
          />
        </Grid>
      )}
      <Grid item sx={styles.textCard}>
        <Skeleton
          data-testid={TEST_ID.TEXT}
          variant={SKELETON_MOCKED_TEXT_TYPE}
          sx={styles.skeletonText}
        />
      </Grid>
      {isUser && (
        <Grid item>
          <Skeleton
            data-testid={TEST_ID.USER_PROFILE}
            variant={SKELETON_MOCKED_PROFILE_TYPE}
            sx={styles.skeletonProfile}
          />
        </Grid>
      )}
    </Grid>
  );
}

MessageSkeleton.propTypes = {
  isUser: PropTypes.bool,
};

MessageSkeleton.defaultProps = {
  isUser: false,
};
export default MessageSkeleton;
