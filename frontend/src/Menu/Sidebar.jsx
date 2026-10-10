import "./Sidebar.css";
import settings from '../assets/settings.svg'
import hamburgerMenu from '../assets/hamburger-menu.svg'
import newChat from '../assets/new-chat.svg'
import { useState } from "react";
import '../components/SettingsModal.css'

export default function Sidebar( {toggleModal} ) {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="menu">
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="chats-heading">Chats</div>
        <button className="menu-toggle" onClick={menuToggle}><img src={hamburgerMenu} alt="menu" /></button>
        <div className="chat-history">
        <a href="#">Old Chat</a>
        <a href="#">Older Chat</a>
        <a href="#">Oldering Chat</a>
        </div>
        <button className="new-chat"><img src={newChat} alt="new-chat" /></button>
        <button className="settings" onClick={toggleModal}><img src={settings} alt="settings" /></button>
      </div>
    </div>
  );
}
