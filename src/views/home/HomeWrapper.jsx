import { useEffect, useState } from "react";
import HomeLeftSide from "./HomeLeftSide";
import HomeRightSide from "./HomeRightSide";
import chatData from "../../assets/json/user-chats.json";

const HomeWrapper = () => {
  const [selectedChatUser, setSelectedChatUser] = useState();
  const [chats, setChats] = useState();

  useEffect(() => {
    if (selectedChatUser) {
      setChats(chatData[selectedChatUser.userId]);
    }
  }, [selectedChatUser]);
  return (
    <>
      <div className="row home">
        <HomeLeftSide leftSideSelectedChatUser={setSelectedChatUser} />
        <HomeRightSide chatData={chats} />
      </div>
    </>
  );
};

export default HomeWrapper;
