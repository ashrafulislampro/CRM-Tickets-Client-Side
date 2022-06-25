import PropTypes from "prop-types";
import React from "react";
import "./Message-history-style.css";

const MessageHistory = ({ msg }) => {
  return (
    <>
      {msg &&
        msg.map((row, index) => (
          <div key={index} className="message-history mt-3">
            <div className="send fw-bold text-secondary">
              <div className="sender">{row?.messageBy}</div>
              <div className="date">{row?.date}</div>
            </div>
            <div className="message">{row?.message}</div>
          </div>
        ))}
    </>
  );
};

export default MessageHistory;

MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};
