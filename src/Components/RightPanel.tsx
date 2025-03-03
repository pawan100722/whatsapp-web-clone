import React, { useContext } from 'react';
import { ChatDetailsHomepage } from './ChatDetailsHomepage.tsx';
import { ChatDetail } from './ChatDetail.tsx';
import { ChatContext } from './MainComponent.tsx';

export const RightPanel=()=>{
  const context = useContext(ChatContext);
  const {selectedChat}=context;
  console.log('selected chat in rightPanel.tsx', selectedChat)
  return <>
     {!selectedChat.length?<ChatDetailsHomepage/>:<ChatDetail/>}
  </>
}