import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import {
  SKELETON_WAVE_TYPE,
  SKELETON_DATA_TEST_ID_WAVE_1,
  SKELETON_DATA_TEST_ID_WAVE_2,
  SKELETON_DATA_TEST_ID_WAVE_3,
} from "../../../../constants/chat/LoadingTextSkeletonConstants";

export default function LoadingSkeleton() {
  const styles = {
    skeletonLoading: {
      maxWidth: "744px",
      width: "48.75vw",
      marginLeft: "100px",
    },
  };
  return (
    <Box style={styles.skeletonLoading}>
      <Skeleton data-testid={SKELETON_DATA_TEST_ID_WAVE_1} />
      <Skeleton
        animation={SKELETON_WAVE_TYPE}
        data-testid={SKELETON_DATA_TEST_ID_WAVE_2}
      />
      <Skeleton animation={false} data-testid={SKELETON_DATA_TEST_ID_WAVE_3} />
    </Box>
  );
}
