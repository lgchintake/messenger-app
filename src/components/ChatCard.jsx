import moment from "moment";
const ChatCard = ({ data }) => {
  return (
    <div className="chat-card">
      <div className="row individual-chat">
        <div className="col-6 actual-chat">
          {data.chatText} <span>{moment(data.time).format("hh:mm A")}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
