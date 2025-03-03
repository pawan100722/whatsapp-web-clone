import React, { createContext, useEffect, useState } from "react";
import "../CSS/MainComponent.css";
import { OtherMenuOptions } from "../Components/OtherMenuOptions.tsx";
import { LeftPanel } from "./LeftPanel.tsx";
import { RightPanel } from "./RightPanel.tsx";
import { DUMMY_DATA } from "../DUMMY_DATA.tsx";
import { MessageDTO } from "../DTOS/ChatDTO.ts";

export const ChatContext = createContext<any>([]);

export const MainComponent = () => {
  const emptyMessage = {
    messageId: "",
    message: "",
    sentDate: "",
    status: "",
    isMessageSent: true,
  };
  const [users, setUsers] = useState(DUMMY_DATA.users);
  const [selectedChat, setSelectedChat] = useState<MessageDTO[]>([]);
  const [progressConversion, setProgressConversation] = useState<MessageDTO>(emptyMessage);

  const handleSelectedChat = (chat: MessageDTO[]) => {
    setSelectedChat(chat);
  };

  useEffect(()=>{
    setSelectedChat(prev=> {
      return [progressConversion, ...prev];});
    // setProgressConversation(emptyMessage);
  },[progressConversion])

  return (
    <div className="main-component-container">
      <OtherMenuOptions />
      <ChatContext.Provider
        value={{ selectedChat, handleSelectedChat, setProgressConversation }}
      >
        <LeftPanel users={users} />
        <RightPanel />
      </ChatContext.Provider>
      {/* <ChatDetails/> */}
    </div>
  );
};
