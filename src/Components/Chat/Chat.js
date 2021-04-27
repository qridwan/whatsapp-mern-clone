
import React, { createRef, useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../App";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import InputForm from "./InputForm";
import Receiver from "./Receiver";
import Sender from "./Sender";


const Chat = () => {
  const [isSendText, setIsSendText] = useState(false);
  // const toggle = () => setIsSendText(!isSendText)
  console.log("🚀 ~ file: Chat.js ~ line 13 ~ Chat ~ isSendText", isSendText)
  const [user] = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const url = "http://localhost:4000/allMessage"
    fetch(url)
    .then(res => res.json())
    .then(data => {
    setMessages(data)
    setIsSendText(true);
    scrollToBottom()
    })
  }, [isSendText])
 

  return (
   <div>
   <div className="chat">
      <ChatHeader/>
     { isSendText && <div className="chatReceiver">
        {
          messages.map(message => 
          {
            if(message.email === user.email){
             return <Sender message={message}/>
            } else {
              return <Receiver message={message}/>
            }
          })
        }
        <div ref={messagesEndRef} />
      </div>
      }
      
      <InputForm setIsSendText={setIsSendText} user={user}/>
    </div>
                           
  </div>
  );
};

export default Chat;
