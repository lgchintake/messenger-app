import ChatUsers from "../../components/ChatUsers";
import SearchAndFilterComponent from "../../components/SearchAndFilterComponent";

const HomeLeftSide = ({leftSideSelectedChatUser}) => {
  return (
    <div className="col-6 col-lg-4 home-left">
      <div className="row justify-content-end top-icons-area">
        <div className="col-2 user-icon">
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="col-2">
          <i className="fa-solid fa-users"></i>
        </div>
        <div className="col-2">
          <i className="fa-solid fa-circle-notch"></i>
        </div>
        <div className="col-2">
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <div className="col-2">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <div className="row chat-list">
        <div className="col-12">
          <SearchAndFilterComponent />
        </div>
        <div className="col-12">
          <ChatUsers chatUsersSelectedUser = {leftSideSelectedChatUser} />
        </div>
      </div>
    </div>
  );
};

export default HomeLeftSide;
