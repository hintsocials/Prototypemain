import React, { useState, useRef, useEffect } from "react";
import backButton from "../../assets/icons/backarrow.svg";
import settings from "../../assets/icons/settings.svg";
import ellipsis from "../../assets/icons/ellipsis.svg";
import smiley from "../../assets/icons/Smily.svg";
import sendMail from "../../assets/icons/SendMail.svg";

import { Link } from "react-router-dom";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const lastMessage = useRef();
  const inputRef = useRef(null);

  const owner = true;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, owner }]);
      setMessage("");
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // for scrolling to the bottom after every message is sended.
  const scrollToBottom = () => {
    lastMessage.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // for the smily button to open the input box
  const handleSmileyClick = () => {
    // Focus on the input field when the smiley button is clicked
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // For handling the Starting Questions.
  const handleStart = () => {
    // implement here.
  };

  return (
    <div className=" bg-[#1E1E1E] h-screen relative overflow-auto">
      {/* Header */}

      <section className=" relative z-10">
        <div className=" fixed w-full bg-[#1E1E1E]">
          <div className=" border-b  border-[#4C4C4C]">
            <div className=" mx-6 h-24 flex justify-between items-center">
              <div className=" flex justify-center  items-center gap-4">
                <Link to="/chat">
                  <img src={backButton} alt="back button" className=" p-2 " />
                </Link>
                {/* for user profile image , name and age. */}
                <div className=" flex gap-1 justify-center items-center">
                  <div className=" w-12 h-12 bg-white rounded-full ">
                    <img
                      src="#"
                      alt="profile image"
                      className=" w-fit h-fit object-cover "
                    />
                  </div>
                  <div>
                    <h3 className=" text-[#D9D9D9] text-base font-normal font-['Lufga']">
                      Name,Age
                    </h3>
                  </div>
                </div>
              </div>
              <div className=" flex justify-center gap-3">
                <Link to="/settings">
                  <img src={settings} alt="settings" className="  w-6 h-6" />
                </Link>
                <button onClick={handleMenuClick} className=" px-1  ">
                  <img src={ellipsis} alt="ellipsis" className="  px-2 " />
                </button>
                {isMenuOpen && (
                  <div className="fixed top-[70px] right-8 w-fit h-fit bg-black rounded-xl">
                    {/* Menu Items */}
                    <ul className="list-none p-2">
                      <li>
                        <button className=" text-sm font-normal px-6 py-2 text-[#D9D9D9]">Leave Chat</button>
                      </li>
                      <li>
                        <button className=" text-sm font-normal px-6 py-2 text-[#D9D9D9]">Report</button>
                      </li>
                      <li>
                        <button className=" text-sm font-normal px-6 py-2 text-[#D9D9D9]">Block Forever</button>
                      </li>
                      <li>
                        <button className=" text-sm font-normal px-6 py-2 text-[#D9D9D9]">Clear history</button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Messages */}

      <section className="  px-10 mt-[220px] ">
        <div className=" items-center text-center flex flex-col justify-center gap-5">
          <span className=" text-center text-[#D9D9D9] text-sm font-normal font-['Lufga'] leading-[14px]">
            We believe in conversation first approach. Take the rapid fire round
            to discover your compatibility.
          </span>
          <span className=" text-center text-[#D9D9D9] text-sm font-normal font-['Lufga'] leading-[14px]">
            The game will have 5 to 7 cumulative questions with 20s to answer
            each question.
          </span>
          <button
            onClick={handleStart}
            className=" text-white w-[168px] h-[55px] px-[60px] py-2.5 bg-gradient-to-r from-[#845CFCBA] to-[#845CFC2B] rounded-[34px] backdrop-blur-[10px] justify-center items-center inline-flex"
          >
            Start
          </button>
        </div>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 mt-3 ${
              msg.owner ? "justify-end items-end" : ""
            }`}
          >
            <div
              className={`${
                msg.owner
                  ? "bg-[#F5FFE8] text-black h-fit w-fit px-3 py-1.5 rounded-b-[20px] rounded-l-[20px]"
                  : "bg-[#3F2170] h-fit w-fit px-3 py-1.5 rounded-b-[20px] rounded-r-[20px]"
              }`}
            >
              <span
                className={`text-xs font-normal font-['Lufga'] leading-none ${
                  msg.owner ? "text-black" : "text-white"
                }`}
              >
                {msg.text}
              </span>
            </div>
            <h6 className="text-white text-[10px] font-normal font-['Lufga'] leading-[14px] mx-1">
              8:40pm
            </h6>
          </div>
        ))}

        <div ref={lastMessage} className=" mb-20"></div>
      </section>

      {/* Input box style. */}

      <section>
        <div className=" fixed w-full bottom-0 bg-[#1E1E1E] py-2">
          <div className="  mx-6 custom-height overflow-hidden  message-border-gradient rounded-full flex justify-between items-center">
            <div className=" flex w-full overflow-hidden ">
              <button className="  p-3" onClick={handleSmileyClick}>
                <img src={smiley} alt="smiley" />
              </button>
              <input
                ref={inputRef}
                type="text"
                placeholder=" Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="  text-zinc-300 text-xl font-light font-['Lufga'] bg-[#292929] flex-grow flex-shrink outline-none w-full md:w-auto"
              />
            </div>
            <button className=" p-4" onClick={handleSendMessage}>
              <img src={sendMail} alt="send mail button" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatPage;
