import moment from "moment";
import clsx from "clsx";

const ChatCard = ({ data }) => {
  return (
    <div className="chat-card mb-2">
      <div
        className={clsx(
          "row individual-chat",
          data.chatType === "send" && "justify-content-end"
        )}
      >
        <div className="col-4 actual-chat">
          {data.chatText} <span>{moment(data.time).format("hh:mm A")}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
