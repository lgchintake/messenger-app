const ChatUsers = () => {
  const userList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="row chat-users">
        <ul className="col-12 chat-ul ps-0 pe-0">
          {userList.map((chatUser) => (
            <li className="chat-user" key={chatUser}>
              <div className="row ps-3 pe-3">
                <div className="col-2 user-img left">
                  <i className="fa-solid fa-circle-user"></i>
                </div>
                <div className="col-8 mid">
                  <div className="row user-name-row">
                    <div className="col">Sachin Telang</div>
                  </div>
                  <div className="row chat-msg-row">
                    <div className="col">Hi, How are you?</div>
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
