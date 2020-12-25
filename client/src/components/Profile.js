import React, {useEffect, useState} from "react";
import Getters from '../services/getter.service'

const Profile = () => {
    const [user, setUser] = useState();
    useEffect(()=>{
        Getters.getUser().then((res)=>{
            res.json().then((data)=>{
                setUser(data)
            })
        })
    },[])
    if (user){
        return (
            <div className="col-md-12">
                <div className="card card-container">
                    <p>Your email:  {user.email}</p>
                    <p>Your full Name:  {user.surname} {user.name} </p>

                </div>
            </div>
        )
    }
    else return (
        <div className="col-md-12">
            <div className="card card-container">
                <p>Your email:  </p>
                <p>Your full Name: </p>
            </div>
        </div>
    )
};

export default Profile;
