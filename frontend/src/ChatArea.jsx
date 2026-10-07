import "./ChatArea.css"
import search from './assets/search.svg'
import Sidebar from "./Menu/Sidebar";

function ChatArea() {
  return (
    <>
      <Sidebar />

      <div className="search-tools">
        <input className="message-bar" type="text" placeholder="Ask Anything!" />
        <button className="search-btn"><img src={search} alt="search" /></button>
      </div>

      <div className="message-container">
        <div className="user-message">
          Hi
        </div>
        <div className="robot-message">
          Hi! How can i help you today?
        </div>
        <div className="user-message">
          How's the weather today?
        </div>
        <div className="robot-message">
          The weather in your city currently is sunny.☀️😎
        </div>
      </div>
    </>
  );
}

export default ChatArea;