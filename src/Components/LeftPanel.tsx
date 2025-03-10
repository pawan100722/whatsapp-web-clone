import '../CSS/ChatList.css';
import  NewChatIcon  from '../Icons/NewChatIcon.tsx';
import MenuIcon from '../Icons/MenuIcon.tsx';
import SearchIcon from '../Icons/SearchIcon.tsx'
import { ChatListDetail } from './ChatListDetail.tsx';
import { ChatListDetailDTO } from '../DTOS/ChatDTO.ts';

export const LeftPanel=({users}: {users:ChatListDetailDTO[]})=>{
  return (
    <div className="chat-list-container">
      <div className="header-container">
        <div className="heading">
          <h1>Chats</h1>
        </div>
        <div className="new-chat icon">
          <NewChatIcon />
        </div>
        <div className="menu icon">
          <MenuIcon />
        </div>
      </div>
      <div className="search-container">
        <div className="search-icon icon">
          <SearchIcon />
        </div>
        <input type="text" className="search-box" />
      </div>
      <div className="label-container">
        <div className="label-all label">All</div>
        <div className="label-unread label">Unread</div>
        <div className="label-favorite label">Favorite</div>
        <div className="label-groups label">Groups</div>
      </div>

      <div className='all-chat-list-detail-container'>
        {users.map(user=><ChatListDetail key={user?.userId} user={user}/>)}
      </div>
    </div>
  );
}