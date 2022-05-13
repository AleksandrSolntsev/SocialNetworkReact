import React from "react";
import styles from './Users.module.css'
import userPhoto from "./../../../src/assets/images/noava.png"
import { NavLink } from "react-router-dom";

let User = (props) => {  
    let u = props.user

    return  (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={ u.photos.small != null ? u.photos.small : userPhoto} className = {styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed 
                    ? <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={()=>{
                        
                        props.unfollow(u.id);
                        }
                        
                        }>Unfollow</button> 


                    : <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={()=>{
                        props.follow(u.id);
                           }}>Follow</button>}
                    
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.coutry"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>)
    
}

export default User;