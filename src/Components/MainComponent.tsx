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
  const [isChatSelected, setIsChatSelected] = useState<boolean>(false)
  const [users, setUsers] = useState(DUMMY_DATA.users);
  const [selectedChat, setSelectedChat] = useState<MessageDTO[]>([]);
  const [progressConversion, setProgressConversation] = useState<MessageDTO>(emptyMessage);
  const [selectedUser, setSelectedUser]= useState<any>({})

  const handleSelectedChat = (chat: MessageDTO[]) => {
    setIsChatSelected(true);
    setSelectedChat(chat);
  };

  useEffect(()=>{
    setSelectedChat(prev=> {
      return [progressConversion, ...prev];});
  },[progressConversion])

  return (
    <div className="main-component-container">
      <OtherMenuOptions />
      <ChatContext.Provider
        value={{isChatSelected, selectedChat, handleSelectedChat, setProgressConversation, selectedUser, setSelectedUser }}
      >
        <LeftPanel users={users} />
        <RightPanel />
      </ChatContext.Provider>
    </div>
  );
};
