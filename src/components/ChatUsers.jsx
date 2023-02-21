import userData from "../assets/json/user.json";

const ChatUsers = ({ chatUsersSelectedUser }) => {
  return (
    <>
      <div className="row chat-users">
        <ul className="col-12 chat-ul ps-0 pe-0">
          {userData.map((chatUser) => (
            <li
              className="chat-user"
              key={chatUser.userId}
              onClick={(e) => chatUsersSelectedUser(chatUser)}
            >
              <div className="row ps-3 pe-3">
                <div className="col-2 user-img left">
                  {chatUser.avatar !=="" ? (
                    <>
                      <img src={chatUser.avatar} className="chat-user-avatar" alt="User Avatar" />
                    </>
                  ) : (
                    <i className="fa-solid fa-circle-user"></i>
                  )}
                </div>
                <div className="col-8 mid">
                  <div className="row user-name-row">
                    <div className="col">{chatUser.name}</div>
                  </div>
                  <div className="row chat-msg-row">
                    <div className="col">Hello</div>
                  </div>
                </div>
                <div className="col-2 right">
                  <div className="row timestamp-row">
                    <div className="col-12">Monday</div>
                  </div>
                  <div className="row actions-row">
                    <div className="col-12 text-end">
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ChatUsers;
