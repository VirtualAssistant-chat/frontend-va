import React from "react";
import { render } from "@testing-library/react";
import MessageSkeleton from "./MessageSkeleton";
import {
  SKELETON_MOCKED_PROFILE_TYPE,
  SKELETON_MOCKED_TEXT_TYPE,
  TEST_ID,
} from "../../../../constants/chat/MessageSkeletonConstants";

const PREFIX_CLASS = "MuiSkeleton-";

describe("<MessageSkeleton />", () => {
  test("Render the MessageSkeleton when isUser is true", () => {
    const { queryByTestId, getByTestId } = render(<MessageSkeleton isUser />);

    const profileSkeleton = getByTestId(TEST_ID.USER_PROFILE);
    expect(profileSkeleton).toBeInTheDocument();
    expect(profileSkeleton).toHaveClass(
      PREFIX_CLASS + SKELETON_MOCKED_PROFILE_TYPE,
    );

    const textSkeleton = getByTestId(TEST_ID.TEXT);
    expect(textSkeleton).toBeInTheDocument();
    expect(textSkeleton).toHaveClass(PREFIX_CLASS + SKELETON_MOCKED_TEXT_TYPE);

    const profileAssistantSkeleton = queryByTestId(TEST_ID.ASSISTANT_PROFILE);
    expect(profileAssistantSkeleton).toBeNull();
  });

  test("Render MessageSkeleton when isUser is false", () => {
    const { queryByTestId, getByTestId } = render(
      <MessageSkeleton isUser={false} />,
    );

    const profileSkeleton = queryByTestId(TEST_ID.USER_PROFILE);
    expect(profileSkeleton).toBeNull();

    const textSkeleton = getByTestId(TEST_ID.TEXT);
    expect(textSkeleton).toBeInTheDocument();
    expect(textSkeleton).toHaveClass(PREFIX_CLASS + SKELETON_MOCKED_TEXT_TYPE);

    const profileAssistantSkeleton = getByTestId(TEST_ID.ASSISTANT_PROFILE);
    expect(profileAssistantSkeleton).toBeInTheDocument();
    expect(profileAssistantSkeleton).toHaveClass(
      PREFIX_CLASS + SKELETON_MOCKED_PROFILE_TYPE,
    );
  });
});
