import React, { useContext, useEffect, useRef, useState } from "react";
import { MessageDTO } from "../DTOS/ChatDTO";
import { ChatContext } from "./MainComponent.tsx";
import "../CSS/ChatDetails.css";
import { PlusIcon } from "../Icons/PlusIcon.tsx";
import { MicIcon } from "../Icons/MicIcon.tsx";
import { EmojiIcon } from "../Icons/EmojiIcon.tsx";
import { CONSTANT } from "../CONSTANTS.ts";
import { ChatDetailHeader } from "./ChatDetailHeader.tsx";

export const ChatDetail = () => {
  const chatRef = useRef<any>(null);

  const emptyChat: MessageDTO = {
    messageId: "",
    message: "",
    isMessageSent: true,
    sentDate: "",
    status: "",
  };

  const context = useContext(ChatContext);
  const { selectedChat, setProgressConversation } = context;
  const [chatMessage, setChatMessage] = useState<MessageDTO>(emptyChat);

  const handleMessage = (e) => {
    const message: MessageDTO = {
      messageId: `msg-${Math.floor(Math.random() * 100000)}`,
      message: e.target.value,
      sentDate: new Date().toISOString(),
      status: CONSTANT.STATUS_MESSAGE_SENT,
      isMessageSent: true,
    };
    setChatMessage(message);
  };

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setProgressConversation(chatMessage);
      setChatMessage(emptyChat);
    }
  };

  // Use useEffect to scroll to the bottom whenever selectedChat changes
  useEffect(() => {
    scrollToBottom();
  }, [selectedChat]);

  return (
    <div className="chat-detail-container">
      <div className="chat-detail-header">
        <ChatDetailHeader />
      </div>
      <div className="all-chat-container">
        {selectedChat
          ?.slice()
          ?.reverse()
          ?.map((message: MessageDTO, index: number) => {
            const isLastMessage = index === selectedChat.length - 1;
            return (
              <div
                key={index}
                className={`chat-container ${
                  message.isMessageSent ? `chat-right` : `chat-left`
                }`}
                ref={isLastMessage ? chatRef : null}
              >
                {!message.isMessageSent ? (
                  <span className="chat-left-arrow"></span>
                ) : (
                  ""
                )}
                <p
                  className={`chat-box ${
                    message.isMessageSent ? `sent-message` : `received-message`
                  }`}
                >
                  {message.message}
                </p>
                {message.isMessageSent ? (
                  <span className="chat-right-arrow"></span>
                ) : (
                  ""
                )}
              </div>
            );
          })}
      </div>
      {selectedChat.length ? (
        <div className="chat-input-container">
          <div className="icon">
            <PlusIcon />
          </div>
          <div
            className="chat-detail-input-container"
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
          >
            <div className="icon">
              <EmojiIcon />
            </div>
            <input
              className="chat-input"
              type="text"
              onChange={(e) => {
                handleMessage(e);
              }}
              value={chatMessage.message}
            />
          </div>
          <div className="icon">
            <MicIcon />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
