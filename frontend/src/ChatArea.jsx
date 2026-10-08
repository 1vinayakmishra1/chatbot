import "./ChatArea.css"
import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import search from './assets/search.svg'
import Sidebar from "./Menu/Sidebar";

function ChatArea() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) {
      return;
    }

    const newMessage = [...messages, { role: "user", text: input }]
    setMessages(newMessage);
    setInput("");

    const response = await axios.post("http://localhost:5000/chat", {
      message: input
    });
    console.log(response.data);

    const reply = response.data.reply;
    setMessages([...newMessage, { role: "ai", text: reply }]);
  }

  return (
    <>
      <Sidebar />

      <div className="search-tools">
        <input value={input} onChange={(event) => {
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
      </div>
    </>
  );
}

export default ChatArea;