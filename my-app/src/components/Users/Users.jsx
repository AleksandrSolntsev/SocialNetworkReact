import React from "react";
import styles from './Users.module.css'
import userPhoto from "./../../../src/assets/images/noava.png"
import { NavLink } from "react-router-dom";
import * as axios from "axios"

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize /300);
        let pages = [] ; //создаем пкстой массив для страниц
        for (let i=1; i <= pagesCount; i++){ // забиваем кол-во страниц в массив
            pages.push(i);
        }

    return <div>
            <div>
                {pages.map( p => {
                    return <span className ={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => {props.onPageChanged(p);}}>{p}  </span>
                })}
            </div>
            { props.users.map (u => <div key ={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={ u.photos.small != null ? u.photos.small : userPhoto} className = {styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed 
                    ? <button disabled={props.followingInProgress.some(id => id==u.id)} onClick={()=>{
                        
                        props.toggleFollowingInProgress(true, u.id);
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
                        {withCredentials: true,
                        headers: {
                            "API-KEY" : "d9eea707-3f90-4d7c-91bc-e65897e18db0"
                        } 
                                }).then(response => {
                            if (response.data.reaultCode == 0){
                                props.unfollow(u.id);
                            }
                            props.toggleFollowingInProgress(false, u.id);
                            });
                            }
                        
                        }>Unfollow</button> 


                    : <button disabled={props.followingInProgress.some(id => id==u.id)} onClick={()=>{
                        props.toggleFollowingInProgress(true, u.id);
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY" : "d9eea707-3f90-4d7c-91bc-e65897e18db0"}
                            }).then(response => {
                            if (response.data.reaultCode == 0){
                                props.follow(u.id);
                            }
                            props.toggleFollowingInProgress(false, u.id);
                            });
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
    </div>
}

export default Users;