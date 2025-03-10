import '../CSS/ChatDetailsHomepage.css';
import LockIcon from '../Icons/LockIcon.tsx';
import WhatsappImage from '../Images/chat_details_homepage.png';

export const ChatDetailsHomepage=()=>{
  return (
    <div className="chat-details-homepage-container">
      <div className="whatsapp-image">
        <img
          src={WhatsappImage}
          alt="whatsapp-image"
          width={"320"}
        />
      </div>
      <div className="main-text">
        <h1>Download Whatsapp for Windows</h1>
      </div>
      <div className="sub-text">
        Make calls, share your screen and get a faster experience when you
        download the Windows app.
      </div>
      <div className="microsoft-store-button">
        <button>Get From Microsoft Store</button>
      </div>
      <div className="encryption-message">
        <div ><LockIcon/></div>Your personal messages are end-to-end encrypted
      </div>
    </div>
  );
}