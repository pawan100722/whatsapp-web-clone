import React from 'react';
import {ChatListDetailDTO} from '../DTOS/ChatDTO';
import '../CSS/ChatList.css'

export const ChatListDetail=({user}: {user:ChatListDetailDTO})=>{
  console.log("ChatListDetail user::", user);
  const {userId,name, phoneNumber, profilePic,status, messages} = user;

  return <div className='chat-list-detail-container'>
    <img className='chat-list-detail-image' src={profilePic} alt={`${name}-profile-pic`} />
    <div className='chat-list-detail'>
      <h1>{name}</h1>
      <p className='chat-list-display-message'>{messages[messages.length-1]?.message}</p>
    </div>
  </div>
}