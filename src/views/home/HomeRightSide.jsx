import { useState } from "react";
import ChatCard from "../../components/ChatCard";

const HomeRightSide = ({ chatData }) => {
  const [chatMessage, setChatMessage] = useState("");
  console.log(chatData)
  return (
    <>
      {chatData?.userId ? (
        <div className="col home-right">
          <div className="row pt-3 pb-2">
            <div className="col-9 chat-heading">
              {chatData.avatar !== "" ? (
                <>
                  <img src={chatData.avatar} alt="" />
                </>
              ) : (
                <i className="fa-regular fa-circle-user"></i>
              )}
              <span className="chat-name ms-2">{chatData.name}</span>
            </div>
            <div className="col-3">
              <span className="vertical-bar ms-5"></span>
              <i className="fa-solid fa-magnifying-glass ms-5"></i>
              <i className="fa-solid fa-chevron-down ms-5"></i>
            </div>
          </div>
          <div className="row chat-box">
            <div className="row">
              <div className="col-12">
                {chatData.chats.map((chat) => (
                  <ChatCard key={chat.chatId} data={chat} />
                ))}
              </div>
            </div>
          </div>
          <div className="row chat-text-bottom">
            <div className="col mt-2">
              <i className="fa-regular fa-face-smile"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fa-solid fa-paperclip"></i>&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                onChange={(e) => setChatMessage(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-1 mt-2">
              {chatMessage !== "" ? (
                <i className="fa-solid fa-paper-plane"></i>
              ) : (
                <i className="fa-solid fa-microphone"></i>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="col home-right text-center">
          <img src="/media/no_chat.jpg" className="no-chat-img" alt="No Chat" />
        </div>
      )}
    </>
  );
};

export default HomeRightSide;
