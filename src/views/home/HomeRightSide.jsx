import ChatCard from "../../components/ChatCard";

const HomeRightSide = ({ chatData }) => {
  console.log({ chatData });

  const chats = [
    {
      chatId: 1,
      name: "Chandrakant Patil Engale",
      message: "OK",
      time: "21-02-2023 21:54:00",
    },
    {
      chatId: 2,
      name: "Chandrakant Patil Engale",
      message: "OK",
      time: "21-02-2023 21:54:00",
    },
    {
      chatId: 3,
      name: "Chandrakant Patil Engale",
      message: "OK",
      time: "21-02-2023 21:54:00",
    },
    {
      chatId: 4,
      name: "Chandrakant Patil Engale",
      message: "OK",
      time: "21-02-2023 21:54:00",
    },
    {
      chatId: 5,
      name: "Chandrakant Patil Engale",
      message: "OK",
      time: "21-02-2023 21:54:00",
    },
  ];
  return (
    <>
      {chatData?.userId ? (
        <div className="col home-right">
          <div className="row mt-3">
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
          <div className="row">
            <div className="row">
              <div className="col-1">
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <div className="col-11">
                {chats.map((chat) => (
                  <ChatCard key={chat.chatId} data={chat} />
                ))}
              </div>
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
