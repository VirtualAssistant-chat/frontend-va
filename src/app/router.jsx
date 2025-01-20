import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import ChatPage from "../pages/ChatPage";
import GetStartedPage from "../pages/GetStartedPage";
import ConversationPage from "../pages/ConversationPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LandingPage />} />
      <Route path="/chat" element={<ChatPage />}>
        <Route index element={<GetStartedPage />} />
        <Route path=":id" element={<ConversationPage />} />
      </Route>
    </Route>,
  ),
);

export default router;
