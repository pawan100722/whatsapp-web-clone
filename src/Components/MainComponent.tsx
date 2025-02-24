import React,{createContext, useState} from 'react';
import '../CSS/MainComponent.css';
import {OtherMenuOptions} from '../Components/OtherMenuOptions.tsx';
import { LeftPanel} from './LeftPanel.tsx';
import { RightPanel } from './RightPanel.tsx';
import { DUMMY_DATA } from '../DUMMY_DATA.tsx';
import { MessageDTO } from '../DTOS/ChatDTO.ts';

export const ChatContext = createContext<any>([]);

export const MainComponent = ()=>{
  const [users, setUsers] = useState(DUMMY_DATA.users);
  const [selectedChat, setSelectedChat] = useState<any[]>([]);

  const handleSelectedChat=(chat: MessageDTO[])=>{
    setSelectedChat(chat);
  }

return (
  <div className="main-component-container">
    <OtherMenuOptions />
    <ChatContext.Provider value={{selectedChat,handleSelectedChat}}>
    <LeftPanel users={users}/>
      <RightPanel />
    </ChatContext.Provider>
    {/* <ChatDetails/> */}
  </div>
);
}