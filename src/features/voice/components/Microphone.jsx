import React from "react";
import PropTypes from "prop-types";
import MicRecorder from "mic-recorder-to-mp3";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import { IconMicrophone, IconPlayerStopFilled } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import sendAudioRequest from "../../../app/services/audioService";
import useAlert from "../../../hooks/alerts/UseAlert";
import { addRequest } from "../../../redux/slices/conversationSlice";
import {
  ERROR_SENDING_AUDIO_CONTENT,
  ERROR_SENDING_AUDIO_TITLE,
} from "../../../constants/audio/MicrophoneCons";
import { CHAT_ICON_ARIA_LABEL_MICROPHONE } from "../../../constants/chat/ChatFieldConstants";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

function Microphone({
  idUser,
  idContext,
  isRecording,
  setIsRecording,
  setIsLoading,
}) {
  const recordingTime = React.useRef(null);
  const alert = useAlert();
  const dispatch = useDispatch();
  const generateName = () => {
    const name = Date.now();
    const extension = ".wav";
    return name + extension;
  };

  const stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer]) => {
        setIsRecording(false);
        setIsLoading(true);
        clearTimeout(recordingTime.current);
        const file = new File(buffer, generateName(), {
          type: "audio/wav",
          lastModified: Date.now(),
        });
        sendAudioRequest(file, idUser, idContext)
          .then((data) => {
            dispatch(
              addRequest({ data: data.text, response: data.textResponse.text }),
            );
          })
          .catch(() => {
            alert.error(ERROR_SENDING_AUDIO_TITLE, ERROR_SENDING_AUDIO_CONTENT);
          })
          .finally(() => {
            setIsLoading(false);
          });
      });
  };

  const start = () => {
    if (!isRecording) {
      Mp3Recorder.start().then(() => {
        setIsRecording(true);
        recordingTime.current = setTimeout(() => {
          stop();
        }, 5000);
      });
    }
  };

  return (
    <Box>
      {isRecording ? (
        <IconButton data-testid="stop-icon" onClick={stop}>
          <IconPlayerStopFilled />
        </IconButton>
      ) : (
        <IconButton
          data-testid={CHAT_ICON_ARIA_LABEL_MICROPHONE}
          onClick={start}
        >
          <IconMicrophone />
        </IconButton>
      )}
    </Box>
  );
}

Microphone.propTypes = {
  idUser: PropTypes.number.isRequired,
  idContext: PropTypes.number.isRequired,
  isRecording: PropTypes.bool.isRequired,
  setIsRecording: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default Microphone;
