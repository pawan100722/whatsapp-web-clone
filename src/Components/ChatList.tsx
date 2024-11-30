import React from 'react';
import '../CSS/ChatList.css';
import  NewChatIcon  from '../Icons/NewChatIcon.tsx';
import MenuIcon from '../Icons/MenuIcon.tsx';

export const ChatList=()=>{
  return <div className='chat-list-container'>
    <div className="header-container">
      <div className="heading">
        <h1>Chats</h1>
      </div>
      <div className="new-chat icon">
        <NewChatIcon/>
      </div>
      <div className="menu icon">
        <MenuIcon/>
      </div>
    </div>
  </div>
}