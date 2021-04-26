
import React, { useContext } from "react";
import { UserContext } from "../../App";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import InputForm from "./InputForm";
import Receiver from "./Receiver";
import Sender from "./Sender";

const Chat = () => {
  const [user] = useContext(UserContext);
  return (
   <div>
   <div className="chat">
      <ChatHeader/>
      <div className="chatReceiver">
        <Receiver/>
        <Sender/>
        <Sender/>
        
      </div> 
      <InputForm user={user}/>
    </div>
    
  </div>
  );
};

export default Chat;
