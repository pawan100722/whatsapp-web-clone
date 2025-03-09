import React from 'react';
import '../CSS/OtherMenuOptions.css';
import  ChatIcon  from '../Icons/ChatIcon.tsx';
import StatusIcon from '../Icons/StatusIcon.tsx';
import ChannelsIcon from '../Icons/ChannelsIcon.tsx';
import CommunityIcon from '../Icons/CommunityIcon.tsx';
import SettingsIcon from '../Icons/SettingsIcon.tsx';
import UserIcon from '../Icons/UserIcon.tsx';

export const OtherMenuOptions=()=>{
  return (
    <div className="other-menu-options-container">
      <div className="main-icons-container">
        {/* <div className="icon-container"> */}
          <div className="icon chats-icon">
            <ChatIcon />
          </div>
          <span className="tooltip chats-tooltip">Chats</span>
        {/* </div> */}
        <div className="icon status-icon">
          <StatusIcon />
        </div>
        <span className="tooltip status-tooltip">Status</span>
        <div className="icon channels-icon">
          <ChannelsIcon />
        </div>
        <span className="tooltip channels-tooltip">Channels</span>
        <div className="icon communities-icon">
          <CommunityIcon />
        </div>
        <span className="tooltip communities-tooltip">Communities</span>
      </div>
      <div className="other-icons-container">
        <div className="icon settings-icon">
          <SettingsIcon />
        </div>
        <span className="tooltip settings-tooltip">Settings</span>

        <div className="icon profile-icon">
          <UserIcon />
        </div>
        <span className="tooltip profile-tooltip">Profile</span>
      </div>
    </div>
  );
}