import  { useContext } from 'react';
import { ChatContext } from './MainComponent.tsx';
import '../CSS/ChatDetailHeader.css';
import { VideoCameraIcon } from '../Icons/VideoCameraIcon.tsx';
import SearchIcon from '../Icons/SearchIcon.tsx';
import MenuIcon from '../Icons/MenuIcon.tsx';

export const ChatDetailHeader = ()=>{
  const classPrefix = "chat-detail-header";
  const chatContext = useContext(ChatContext);
  const {selectedUser} = chatContext;
  
  return (
    <div className={`${classPrefix}-container`}>
      <div className={`${classPrefix}-left-content`}>
          <img
            className={`${classPrefix}-profile-pic`}
            src={selectedUser?.profilePic}
            alt={selectedUser?.name}
          />
        <span className={`${classPrefix}-user-name`}>{selectedUser?.name}</span>
        {/* <div className={`${classPrefix}-user-last-seen`}></div> */}
      </div>
      <div className={`${classPrefix}-right-content`}>
        <div className={`${classPrefix}-icons-container`}>
          <span className={`${classPrefix}-icon`}><VideoCameraIcon/></span>
          <div className={`${classPrefix}-icon`}><SearchIcon/></div>
          <div className={`${classPrefix}-icon`}><MenuIcon/></div>
        </div>
      </div>
    </div>
  );
}