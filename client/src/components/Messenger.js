import React, {useEffect, useState} from "react";
import Getters from '../services/getter.service'
import AuthService from '../services/auth.service'

const Messenger = () => {
    const [timeout, setTime] = useState(10000);
    const [msgId, setMsgId] = useState();
    const [currentMessage, setCurrentMessage] = useState('')
    const [friends, setFriends] = useState();
    const [messages, setMessages] = useState()
    useEffect(() => {
        setTimeout(async ()=>{
            await Getters.getFriends().then((res) => {
                res.json().then((data) => {
                    setFriends(data)
                })
            })
            }, timeout)
    })
    const onChangeMessage = e =>{
        setCurrentMessage(e.target.value)
    }
    const sendMessage = () =>{
        Getters.sendMessage(msgId, currentMessage)
            .then(()=>{
                Getters.getMessagesById(msgId)
                    .then((res)=>{
                        res.json().then(async data => {
                            setMsgId(data.receiver)
                            setMessages(data.messages)
                        })
                    })
            })

    }

    const goToFriend = (e) =>{
        Getters.getMessagesById(e.target.value)
            .then((res)=>{
                res.json().then(async data => {
                    setMsgId(data.receiver)
                    setMessages(data.messages)
                })
            })
    }
    let messageBox;
    let friendsList;
    if (messages){
        messageBox = (
            <div>
                <ul className='collection s8'>
                    {messages.map((message, index)=>(
                        <li className='collection-item avatar' key={index}>
                            <span className='title'>{message.name} {message.surname}</span>
                            <p>{message.date} <br/>
                                {message.message}
                            </p>
                        </li>
                    ))}
                    <p>{msgId}</p>
                </ul>
                <input value={currentMessage} onChange={onChangeMessage}/>
                <button onClick={sendMessage} className='btn' >Send</button>
            </div>
        )
    }
    else if (friends){
        friendsList = (
            <div>
                <p className='collection-header'>Your dialogues</p>
                <div className='collection'>
                    {friends.map((friend,index) => (
                        <div>
                        <div className="col s12 m1">
                        <div className="card horizontal">
                        <div className="card-stacked">
                        <div className="card-content">
                        <p key={index}>{friend.name}    {friend.surname}</p>
                        </div>
                        <div className="card-action">
                        <button value={friend.id} onClick={goToFriend} className='btn' >Go to chat</button>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    else
        friendsList = (
            <div>
                <p>Processing...</p>
            </div>
        )

    return (
        <div>
            {friendsList}
            {messageBox}
        </div>
    )
}
export default Messenger