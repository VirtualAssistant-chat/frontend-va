import React from "react";
import PropTypes from "prop-types";
import MessageComponent from "../message/MessageComponent";

function Conversation({ messageRequest, messageResponse }) {
  return (
    <>
      <MessageComponent message={messageRequest} isUser />
      <MessageComponent message={messageResponse} />
    </>
  );
}

Conversation.propTypes = {
  messageRequest: PropTypes.string.isRequired,
  messageResponse: PropTypes.string,
};

Conversation.defaultProps = {
  messageResponse: "...",
};

export default Conversation;
