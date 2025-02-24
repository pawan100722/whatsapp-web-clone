import React, { useContext } from "react";
import { MessageDTO } from "../DTOS/ChatDTO";
import { ChatContext } from "./MainComponent.tsx";
import "../CSS/ChatDetails.css";

export const ChatDetail = () => {
  const context = useContext(ChatContext);
  const { selectedChat } = context;
  selectedChat?.map((m) => console.log(m.message));
  selectedChat?.reverse()?.map((m) => console.log("reverse:", m.message));
  return (
    <div className="chat-detail-container">
      <div className="all-chat-container">
        {selectedChat
          ?.slice()
          ?.reverse()
          ?.map((message: MessageDTO) => {
            return (
              <div
                key={message?.messageId}
                className={`chat-container ${
                  message.isMessageSent ? `chat-right` : `.chat-left`
                }`}
              >
                <p className={`chat-box`}>{message.message}</p>
              </div>
            );
          })}
      </div>
      {selectedChat.length ? (
        <div className="chat-input-container">
          <input className="chat-input" type="text" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
