import React from "react";

import MessageSkeleton from "../message/MessageSkeleton";

function ConversationSkeleton() {
  return (
    <>
      <MessageSkeleton isUser />
      <MessageSkeleton />
    </>
  );
}

export default ConversationSkeleton;
