import React from "react";
import { useParams } from "react-router-dom";

import { USER_ID } from "../constants/user/mokedUserCons";
import Chat from "../features/chat/components/Chat";

function GetStartedPage() {
  const contextId = useParams().id;
  const numberContextId = parseInt(contextId, 10);

  return <Chat userId={USER_ID} contextId={numberContextId} />;
}

export default GetStartedPage;
