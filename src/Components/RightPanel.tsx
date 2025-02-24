import React, { useContext } from 'react';
import { ChatDetailsHomepage } from './ChatDetailsHomepage.tsx';
import { MessageDTO } from '../DTOS/ChatDTO.ts';
import { ChatDetail } from './ChatDetail.tsx';
import { ChatContext } from './MainComponent.tsx';

export const RightPanel=()=>{
  const context = useContext(ChatContext);
  const {selectedChat}=context;
  return <>
     {!selectedChat?<ChatDetailsHomepage/>:<ChatDetail/>}
  </>
}