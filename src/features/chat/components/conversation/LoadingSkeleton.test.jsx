import React from "react";
import { render } from "@testing-library/react";
import LoadingSkeleton from "./LoadingSkeleton";
import {
  SKELETON_DATA_TEST_ID_WAVE_1,
  SKELETON_DATA_TEST_ID_WAVE_2,
  SKELETON_DATA_TEST_ID_WAVE_3,
} from "../../../../constants/chat/LoadingTextSkeletonConstants";

test("Renders LoadingSkeleton component", () => {
  const { getByTestId } = render(<LoadingSkeleton />);

  const skeleton1 = getByTestId(SKELETON_DATA_TEST_ID_WAVE_1);
  const skeleton2 = getByTestId(SKELETON_DATA_TEST_ID_WAVE_2);
  const skeleton3 = getByTestId(SKELETON_DATA_TEST_ID_WAVE_3);

  expect(skeleton1).toBeInTheDocument();
  expect(skeleton2).toBeInTheDocument();
  expect(skeleton3).toBeInTheDocument();
});
