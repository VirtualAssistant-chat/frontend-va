import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { IconSend } from "@tabler/icons-react";
import {
  useTheme,
  IconButton,
  InputAdornment,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import { useDispatch } from "react-redux";
import { addRequest } from "../../../../redux/slices/conversationSlice";
import { createTextRequest } from "../../../../app/services/chatService";
import {
  CHAT_PLACEHOLDER,
  CHAT_TYPE,
  CHAT_NAME_COMPONENT,
  CHAT_ICON_TYPE_BUTTON,
  CHAT_ICON_ARIA_LABEL,
  MESSAGE_SEND_ERROR_TITLE,
  MESSAGE_SEND_ERROR_CONTENT,
  MESSAGE_ANIMATION_LISTENING,
} from "../../../../constants/chat/ChatFieldConstants";
import formatDate from "../../../../helpers/formatterDate/formatterDate";
import { USER_ID } from "../../../../constants/user/mokedUserCons";
import useAlert from "../../../../hooks/alerts/UseAlert";
import Microphone from "../../../voice/components/Microphone";
import AnimationListening from "../../../../assets/animation_voice.json";
import textToSpeechService from "../../../../utils/textToSpeech/service/TextToSpeechService";
import LoadingSkeleton from "../conversation/LoadingSkeleton";

function ChatField({ contextId, inputRef, updateHeight }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [requestText, setRequestText] = useState("");
  const [showSendIcon, setShowSendIcon] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const alert = useAlert();

  const styles = {
    inputBase: {
      padding: "16px 30px",
      display: "flex",
      alignItems: "center",
      width: "79.43%",
      margin: "0px 10.29% 52.8px 10.29%",
      boxShadow: "6px 6px 18px 0 rgba(43, 45, 115, 0.15)",
      backgroundColor: theme.palette.white.main,
      color: theme.palette.text.primary,
    },
    animationListening: {
      height: "250px",
      justifyContent: "center",
    },
    textAnimation: {
      paddingTop: "9px",
      width: "100%",
      textAlign: "center",
    },
    animationBox: {
      justifyContent: "center",
      alignItems: "center",
    },
  };

  const handleSend = async () => {
    const currentDate = new Date();

    const requestBody = {
      context: {
        idContext: contextId,
      },
      date: formatDate(currentDate),
      idUser: USER_ID,
      text: requestText,
    };

    createTextRequest(requestBody)
      .then((data) => {
        const response = data.textResponse.text;
        dispatch(addRequest({ data: requestText, response }));
        textToSpeechService.speak(response);
      })
      .catch(() => {
        alert.error(MESSAGE_SEND_ERROR_TITLE, MESSAGE_SEND_ERROR_CONTENT);
        dispatch(
          addRequest({
            data: requestText,
            response: MESSAGE_SEND_ERROR_CONTENT,
          }),
        );
        textToSpeechService.speak(MESSAGE_SEND_ERROR_CONTENT);
      })
      .finally(() => {
        setRequestText("");
        setShowSendIcon(false);
        updateHeight();
      });
  };

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const trimValue = inputValue.trim();
    setRequestText(inputValue);
    setShowSendIcon(trimValue !== "");
    updateHeight();
  };

  useEffect(() => {
    setRequestText("");
    setShowSendIcon(false);
    setIsRecording(false);
  }, [contextId]);

  return (
    <Box>
      {isRecording && (
        <Box style={styles.animationBox}>
          <Typography
            style={styles.textAnimation}
            color={theme.palette.text.primary}
          >
            {MESSAGE_ANIMATION_LISTENING}
          </Typography>
          <Player
            src={AnimationListening}
            className="player"
            loop
            autoplay
            style={styles.animationListening}
          />
        </Box>
      )}
      {isLoading && <LoadingSkeleton />}
      <TextField
        color="white"
        fullWidth
        multiline
        placeholder={CHAT_PLACEHOLDER}
        type={CHAT_TYPE}
        name={CHAT_NAME_COMPONENT}
        maxRows={4}
        inputRef={inputRef}
        InputProps={{
          style: { ...styles.inputBase, ...theme.typography.h4_16 },
          endAdornment: (
            <InputAdornment position="end">
              {showSendIcon ? (
                <IconButton
                  type={CHAT_ICON_TYPE_BUTTON}
                  aria-label={CHAT_ICON_ARIA_LABEL}
                  onClick={() => {
                    handleSend();
                  }}
                >
                  <IconSend color={theme.palette.primary.main} />
                </IconButton>
              ) : (
                <Microphone
                  idUser={USER_ID}
                  idContext={contextId}
                  isRecording={isRecording}
                  setIsRecording={setIsRecording}
                  setIsLoading={setIsLoading}
                />
              )}
            </InputAdornment>
          ),
        }}
        value={requestText}
        onChange={handleInput}
      />
    </Box>
  );
}

ChatField.propTypes = {
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  contextId: PropTypes.number.isRequired,
  updateHeight: PropTypes.func.isRequired,
};

ChatField.defaultProps = {
  inputRef: null,
};

export default ChatField;
