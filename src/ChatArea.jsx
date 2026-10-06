import "./ChatArea.css"
import Sidebar from "./Menu/Sidebar";

function ChatArea() {
  return(
    <>
    <Sidebar />


    <div className="message-container">
    <input className="message-bar" type="text" placeholder="Message" />
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