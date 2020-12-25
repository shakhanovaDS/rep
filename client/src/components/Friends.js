import React, {useEffect, useState} from "react";
import Getters from '../services/getter.service'

const Friends = () => {
    let timeout = 10000;
    const [friends, setFriends] = useState();
    const [possibleFriends, setPossibleFriends] = useState();
    useEffect(() => {
        setTimeout(async ()=>{
            await Getters.getFriends().then((res) => {
                res.json().then((data) => {
                    setFriends(data)
                })
            })
            await Getters.getStrangers().then((res) => {
                res.json().then((data) => {
                    setPossibleFriends(data)
                })
            })
        }, timeout)
    })
    const addFriend = async (e) =>{
        await Getters.addFriend(e.target.value).then()
    }

    let friendsList;
    if (friends){
        friendsList = (
            <div>
                <p className='collection-header'>Your friends</p>
                <ul className='collection'>
                    {friends.map((friend,index) => (
                        <li key={index} className='collection-item text-center'><p className='text-center'>Name: {friend.name} Surname: {friend.surname}</p></li>
                    ))}
                </ul>
            </div>
        )
    }
    else
        friendsList = (
            <div>
                <p>Processing...</p>
            </div>
        )
    let possibleFriendsList;
    if (possibleFriends)
        possibleFriendsList = (
            <div>
                <p className='collection-header'>Your possible friends</p>
                <ul className='collection'>
                    {possibleFriends.map((stranger,index) => (
                        <li key={index} className='collection-item text-center'>
                            <p className='text-center'>Name: {stranger.name} Surname: {stranger.surname}</p>
                            <button className="btn btn-primary btn-block right center" value={stranger.id} onClick={addFriend}>Add</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    else possibleFriendsList = (
        <p>Processing...</p>
    )
    return (
        <div>
            <div>{friendsList}</div>
            <div>{possibleFriendsList}</div>
        </div>
    )
}

export default Friends
