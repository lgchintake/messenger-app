const ChatCard = ({data})=>{
    return(
        <div className="chat-card">
            <div className="row">
                <div className="col">{data.name}</div>
            </div>
            <div className="row">
                <div className="col">{data.message}</div>
            </div>
        </div>
    )
}

export default ChatCard;