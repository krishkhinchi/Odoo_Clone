import React, { useState, useEffect } from "react";
import "../Style/ChatBot.css";

import minimize from "../img/minimize.png";
import Comment from "../img/Comment.svg";
import cancel from "../img/cancel.svg";
import smile from "../img/smile.png";
import plus from "../img/plus.png";
import send from "../img/send.png";

//Profile pics
import img1 from "../img/ProfilePhoto/Khushi.jpg";
import img2 from "../img/ProfilePhoto/Shin-chan.jpg";
import img3 from "../img/ProfilePhoto/Krish.png";
import img4 from "../img/ProfilePhoto/KrishHackz.jpg";
import img5 from "../img/ProfilePhoto/lucky.jpg";
import img6 from "../img/ProfilePhoto/pratik.jpg";
import img7 from "../img/ProfilePhoto/ronak.jpg";
import img8 from "../img/ProfilePhoto/Zuveriya.jpg";

export default function ChatBot() {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);

  const arr = [
    { img: img1, name: "Khushi Singh", position: "Technical Expert" },
    { img: img2, name: "Tanu Panchal", position: "HR Recruiter" },
    { img: img3, name: "Krish Khinchi", position: "Former CEO of SAP" },
    { img: img4, name: "Krish Hackz", position: "Data Analyst" },
    { img: img5, name: "Lucky Lohar", position: "Customer Support Representative" },
    { img: img6, name: "Pratik Solanki", position: "Software Developer" },
    { img: img7, name: "Ronak Malam", position: "Marketing Specialist" },
    { img: img8, name: "Zuveriya Pathan", position: "Sales Manager" },
    { img: img4, name: "Krish Hackz", position: "Data Analyst" },
    { img: img4, name: "Krish Hackz", position: "Data Analyst" },
  ];

  const randomElement = arr[Math.floor(Math.random() * 10)];

  function handleChatBot() {
    document.getElementById("chatSectionInChatBot").style.display = "block";
    document.getElementById("circleInChatBot").style.display = "none";
    setTime(new Date());
  }

  function handleHideChatBot() {
    document.getElementById("chatSectionInChatBot").style.display = "block";
    document.getElementById("circleInChatBot").style.display = "none";
    document.getElementById("circleToHideInChatBot").style.display = "none";
  }

  function handleMinimize() {
    document.getElementById("circleToHideInChatBot").style.display = "block";
    document.getElementById("chatSectionInChatBot").style.display = "none";
    document.getElementById("circleInChatBot").style.display = "none";
  }

  function handleCancel() {
    document.getElementById("circleToHideInChatBot").style.display = "none";
    document.getElementById("chatSectionInChatBot").style.display = "none";
    document.getElementById("circleInChatBot").style.display = "block";
  }

  function handlePlus() {
    setCount(count + 1);
    function showTypeFile() {
      document.getElementById("typeFileInChatbotTypebar").style.display =
        "block";
    }
    function hideTypeFile() {
      document.getElementById("typeFileInChatbotTypebar").style.display =
        "none";
    }
    count % 2 == 0 ? showTypeFile() : hideTypeFile();
  }

  return (
    <>
      <div id="chatSectionInChatBot">
        <div className="chatbotTitle">
          <div className="borderProfileImgInChatbotTitle">
            <img
              className="adminProfileImgInChatbotTitle"
              src={randomElement.img}
            />
          </div>
          <div className="handleAdminNameInChatbotTitle">
            <h1 className="adminNameInChatbotTitle">{randomElement.name}</h1>
            <h3 className="adminPositionInChatbotTitle">{randomElement.position}</h3>
          </div>
          <img
            className="minimizeImgInChatbotTitle"
            onClick={handleMinimize}
            src={minimize}
          />
          <img
            className="cancelImgInChatbotTitle"
            onClick={handleCancel}
            src={cancel}
          />
        </div>
        <div className="chatbotBody">
          <div style={{ display: "flex" }}>
            <img
              className="adminProfileImgInChatbotBody"
              src={randomElement.img}
            />
            <h1 className="adminNameInChatbotBody">{randomElement.name}</h1>
            <div className="timeInChatbotBody">
              Today at {time.toLocaleTimeString()}
            </div>
          </div>
          <div
            id="messageSectionInChatbotBody"
            className="messageSectionInChatbotBody"
          >
            Welcome to Odoo. How can I help you today?
          </div>
        </div>
        <div className="chatbotTypebar">
          <div id="typeFileInChatbotTypebar">
            <input className="inputField" type="file" />
          </div>
          <div className="mainTypebarInChatbotTypebar">
            <img
              className="plusIconInChatbotTypebar"
              onClick={handlePlus}
              src={plus}
            />
            <input
              className="inputInChatbotTypebar"
              type="text"
              placeholder="Say something..."
            />
            <img className="smileIconInChatbotTypebar" src={smile} />
            <img className="sendIconInChatbotTypebar" src={send} />
          </div>
        </div>
      </div>
      <div
        id="circleInChatBot"
        onClick={() => {
          handleChatBot();
        }}
      >
        <img
          id="commentIconInChatBot"
          className="commentIconInChatBot"
          src={Comment}
        />
      </div>
      <div id="circleToHideInChatBot" onClick={handleHideChatBot}>
        <img className="imgInCircleToHideInChatBot" src={randomElement.img} />
      </div>
    </>
  );
}