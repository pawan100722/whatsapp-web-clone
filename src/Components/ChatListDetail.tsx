import { useContext } from 'react';
import {ChatListDetailDTO} from '../DTOS/ChatDTO';
import '../CSS/ChatList.css'
import { ChatContext } from './MainComponent.tsx';
import { CONSTANT } from '../CONSTANTS.ts';

export const ChatListDetail=({user}: {user:ChatListDetailDTO})=>{

  const context = useContext(ChatContext);
  const { handleSelectedChat, setSelectedUser } = context;

  const {name,  profilePic, messages} = user;

  return (
    <div
      className="chat-list-detail-container"
      onClick={() => {
        handleSelectedChat(user?.messages);
        setSelectedUser(user);
      }}
    >
      <img
        className="chat-list-detail-image"
        src={profilePic}
        alt={`${name}-profile-pic`}
      />
      <div className="chat-list-detail">
        <h1>{name}</h1>
        <p
          className={`chat-list-display-message ${
            messages[messages.length - 1]?.status ===
            CONSTANT.STATUS_MESSAGE_UNREAD
              ? "unread-message"
              : ""
          }`}
        >
          {messages[messages.length - 1]?.message}
        </p>
      </div>
    </div>
  );
}