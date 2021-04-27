import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MicIcon from "@material-ui/icons/Mic";
import MoodIcon from "@material-ui/icons/Mood";
import dateFormat from 'dateformat';
import React, { useState } from "react";
import "./InputForm.css";

const InputForm = ({user, setIsSendText}) => {
  const now = new Date();
    const thisTime = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM TT");
  const {name, email, photo} = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.message.value;
    const senderInfo = {
      name: name,
      email: email,
      ing: photo,
      text: text,
      time: thisTime
    }

    const url = "http://localhost:4000/sendMessage";
    fetch(url, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(senderInfo)
    })
    .then(response => {
      if (response) {
        setIsSendText(false);
      }
    })
  console.log("🚀 ~ file: InputForm.js ~ line 9 ~ InputForm ~ data", senderInfo);
  e.target.message.value = ""
  }
  return (
<div className="d-flex justify-content-center">
<div className="chat_footer">
        <MoodIcon className=""/>
        <form className="form px-3" onSubmit={handleSubmit}>
          <input className="input" type="text" placeholder={`${name} Type a Message`} name="message" />
          <input className="button" type="submit"/>
        </form>
        <CameraAltIcon/>
        <MicIcon className="ml-2"/>
      </div>
</div>
  );
};

export default InputForm;
