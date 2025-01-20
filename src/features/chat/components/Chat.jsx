import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useTheme, useMediaQuery, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Conversation from "./conversation/Conversation";
import { getRequestAndResponses } from "../../../app/services/chatService";
import ConversationSkeleton from "./conversation/ConversationSkeleton";
import useAlert from "../../../hooks/alerts/UseAlert";
import {
  loadData,
  selectChatList,
} from "../../../redux/slices/conversationSlice";
import {
  ERROR_FETCHING_DATA_CONTENT,
  ERROR_FETCHING_DATA_TITLE,
  TEST_ID_CONTAINER,
} from "../../../constants/chat/ChatConstants";
import { selectChatFieldHeight } from "../../../redux/slices/chatFieldHeightSlice";

function Chat({ userId, contextId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [scrollPointer, setScrollPointer] = useState(0);
  const chatFieldHeight = useSelector(selectChatFieldHeight);

  const dispatch = useDispatch();
  const chatList = useSelector(selectChatList);
  const theme = useTheme();
  const alert = useAlert();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const chatContainerRef = useRef(null);

  const styles = {
    chatContainer: {
      padding: isMobile ? "32.25px 42px" : "64.5px 84px",
      backgroundColor: theme.palette.background.main,
      maxHeight: "100%",
      overflowY: "auto",
      overflowX: "hidden",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      height: `calc(100vh - 2.4vh - 64px - 52.8px - 32px - ${
        chatFieldHeight === 0 ? 28 : chatFieldHeight
      }px)`,
      maxHeight: `calc(100vh - 2.4vh - 64px - 52.8px  - 32px - ${
        chatFieldHeight === 0 ? 28 : chatFieldHeight
      }px)`,
    },
  };

  const handleScroll = (event) => {
    const { scrollTop } = event.currentTarget;
    if (scrollTop <= 0 && !isLoading && pageNumber >= 0) {
      setPageNumber((current) => current + 1);
    }
  };

  useEffect(() => {
    dispatch(loadData({ page: 0, data: [] }));
    setPageNumber(0);
    const scrollRef = chatContainerRef.current;
    if (scrollRef) {
      setScrollPointer(scrollRef.scrollHeight);
    }
  }, [contextId, dispatch]);

  useEffect(() => {
    const scrollRef = chatContainerRef.current;
    if (scrollRef) {
      const height = scrollRef.scrollHeight;
      chatContainerRef.current.scrollTop = height;
    }
  }, [chatList]);

  useEffect(() => {
    const scrollRef = chatContainerRef.current;
    if (scrollRef) {
      const height = scrollRef.scrollHeight;
      chatContainerRef.current.scrollTop = height - scrollPointer;
    }
  }, [scrollPointer]);

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        setIsLoading(true);
        const pointer = chatContainerRef.current.scrollHeight;
        const chatListResponse = await getRequestAndResponses(
          userId,
          contextId,
          pageNumber,
        );
        setIsLoading(false);

        if (chatListResponse.length !== 0) {
          dispatch(
            loadData({
              page: pageNumber,
              data: chatListResponse,
            }),
          );
          setScrollPointer(pointer);
        } else {
          setPageNumber(-1);
        }
      } catch (error) {
        alert.error(ERROR_FETCHING_DATA_TITLE, ERROR_FETCHING_DATA_CONTENT);
      }
    };

    if (pageNumber !== -1) {
      fetchChatData();
    }
  }, [userId, contextId, pageNumber, alert, dispatch]);

  return (
    <Box style={styles.container} data-testid={TEST_ID_CONTAINER.CHAT}>
      <Box
        ref={chatContainerRef}
        style={styles.chatContainer}
        onScroll={handleScroll}
        key={userId + contextId}
        data-testid={TEST_ID_CONTAINER.SCROLL}
      >
        {isLoading && <ConversationSkeleton />}
        {Object.keys(chatList).map((idRequest) => {
          const { textRequest, textResponse } = chatList[idRequest];
          return (
            <Conversation
              key={idRequest}
              messageRequest={textRequest}
              messageResponse={textResponse ?? ERROR_FETCHING_DATA_TITLE}
            />
          );
        })}
      </Box>
    </Box>
  );
}

Chat.propTypes = {
  userId: PropTypes.number.isRequired,
  contextId: PropTypes.number.isRequired,
};

export default Chat;
