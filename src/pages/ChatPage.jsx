import React, { useCallback, useEffect, useRef, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/material";
import CustomDrawer from "../common/sideBar/CustomDrawer";
import { DRAWER_WIDTH } from "../constants/sideBar/contentSectionConst";
import { getAllContextByAUser } from "../app/services/contextService";
import useAlert from "../hooks/alerts/UseAlert";
import {
  ERROR_FETCHING_DATA_CONTENT,
  ERROR_FETCHING_DATA_TITLE,
} from "../constants/context/contextAlertCons";
import { USER_ID } from "../constants/user/mokedUserCons";
import TopBarSection from "../common/topBar/TopBarSection";
import ChatField from "../features/chat/components/field/ChatField";
import {
  selectChatFieldHeight,
  setChatFieldHeight,
} from "../redux/slices/chatFieldHeightSlice";

function ChatPage() {
  const [open, setOpen] = useState(true);
  const [contextList, setContextList] = useState([]);
  const chatFieldHeight = useSelector(selectChatFieldHeight);
  const inputRef = useRef(null);
  const alert = useAlert();
  const contextId = useParams().id;
  const numberContextId = parseInt(contextId, 10);
  const dispatch = useDispatch();

  const fetchContextData = useCallback(async () => {
    try {
      const contextListResponse = await getAllContextByAUser(USER_ID);
      setContextList(contextListResponse);
    } catch (error) {
      alert.error(ERROR_FETCHING_DATA_TITLE, ERROR_FETCHING_DATA_CONTENT);
    }
  }, [alert]);

  useEffect(() => {
    fetchContextData();
  }, [fetchContextData]);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const updateChatFieldHeight = useCallback(() => {
    if (inputRef.current) {
      dispatch(setChatFieldHeight(inputRef.current.clientHeight));
    }
  }, [dispatch]);

  useEffect(() => {
    updateChatFieldHeight();
    window.addEventListener("resize", updateChatFieldHeight);
    return () => {
      window.removeEventListener("resize", updateChatFieldHeight);
    };
  }, [updateChatFieldHeight]);

  const styles = {
    mainContainer: {
      width: open ? `calc(100vw - ${DRAWER_WIDTH}px)` : "100vw",
      marginLeft: open ? `${DRAWER_WIDTH}px` : 0,
      height: "calc( 100vh - 2.4vh - 64px )",
      marginTop: "calc( 2.4vh + 64px )",
      display: "flex",
      flexDirection: "column",
      alignItems: "space-between",
      justifyContent: "space-between",
    },
    outletContainer: {
      height: `calc(100vh - 2.4vh - 64px - 52.8px - 32px - ${chatFieldHeight}px)`,
      maxHeight: `calc(100vh - 2.4vh - 64px - 52.8px - 32px - ${chatFieldHeight}px)`,
      overflowY: "hidden",
    },
  };

  return (
    <>
      <CustomDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        contextList={contextList}
        fetchContextData={fetchContextData}
      />
      <Box sx={styles.mainContainer}>
        <TopBarSection
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          contextId={contextId}
        />
        <Box sx={styles.outletContainer}>
          <Outlet />
        </Box>
        <ChatField
          inputRef={inputRef}
          updateHeight={updateChatFieldHeight}
          contextId={numberContextId}
        />
      </Box>
    </>
  );
}

export default ChatPage;
