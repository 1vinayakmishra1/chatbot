import "./ChatArea.css"
import Sidebar from "./Menu/Sidebar";

function ChatArea() {
  return(
    <>
    <Sidebar />

    <input className="message-bar" type="text" placeholder="Message" />
    </>
  );
}

export default ChatArea;