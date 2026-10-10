import "./ChatArea.css"
import { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import search from './assets/search.svg'
import Sidebar from "./Menu/Sidebar";
import SettingsModal from "./components/settingsModal";
import LoadingSpinnerGif from './assets/LoadingSpinnerGif.gif'

function ChatArea() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState("");

  function toggleModal() {
    setModal(!modal);
  }

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  }, [messages]);

  const sendMessage = async () => {
    if (isLoading || !input.trim()) {
      return;
    }

    setIsLoading(true);

    const newMessage = [...messages, { role: "user", text: input }]
    setMessages(newMessage);
    setInput("");

    const response = await axios.post("http://localhost:5000/chat", {
      message: input
    });

    const reply = response.data.reply;
    setMessages(prev => [...prev, { role: "ai", text: reply }]);
    setIsLoading(false);
  }

  return (
    <>
      <Sidebar toggleModal={toggleModal} />

      <SettingsModal modal={modal} toggleModal={toggleModal} />

      <div className="search-tools">
        <input onKeyDown={(event) => {
          if (event.key === 'Enter') {
            sendMessage();
          }
        }} value={input} onChange={(event) => {
          setInput(event.target.value);
        }} className="message-bar" type="text" placeholder="Ask Anything!" />
        <button onClick={sendMessage} className="search-btn"><img src={search} alt="search" /></button>
      </div>

      <div className="message-container">
        {messages.map((msg, index) => {
          return (
            <div key={index} className={msg.role === "user" ? "user-message" : "robot-message"}>
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          );
        })}
        {isLoading && (
          <div className="robot-message">
            <img className="loading-spinner" src={LoadingSpinnerGif} alt="loading..." />
          </div>
        )}
      </div>
    </>
  );
}

export default ChatArea;