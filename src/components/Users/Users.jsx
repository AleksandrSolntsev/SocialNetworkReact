import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {  
    return (
            <div>
                 <Paginator currentPage={props.currentPage} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize}
                            onPageChanged={props.onPageChanged}/>
                <div>
                {
                 props.users.map (u => <User user={u} key ={u.id} followingInProgress={props.followingInProgress} 
            unfollow={props.unfollow} follow={props.follow}/>)
                 }
                 </div>
            </div>)
    
}

export default Users;