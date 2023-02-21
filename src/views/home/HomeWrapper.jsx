import { useState } from "react";
import HomeLeftSide from "./HomeLeftSide";
import HomeRightSide from "./HomeRightSide";

const HomeWrapper = () => {
  const [selectedChatUser, setSelectedChatUser] = useState();
  const chatData = {};
  // const selectedChatUser = (user)=>{
  //   setSelectedChatUser(user)
  // }
  return (
    <>
      <div className="row home">
        <HomeLeftSide leftSideSelectedChatUser = {setSelectedChatUser} />
        <HomeRightSide chatData = {selectedChatUser} />
      </div>
    </>
  );
};

export default HomeWrapper;
