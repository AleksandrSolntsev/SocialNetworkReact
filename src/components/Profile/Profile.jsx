import React from "react";
import styles from './Profile.module.css';
import ProfileInfo from "./PfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
// console.log(props.profileState.posts)

  return (
    <div className={styles.profileBox}>
          <ProfileInfo profileData= {props.profileData} saveProfile={props.saveProfile} 
          savePhoto={props.savePhoto} isOwner={props.isOwner} status = {props.status} 
          updateUserStatus={props.updateUserStatus}/>
          <MyPostsContainer store = {props.store}/>
          </div>
      )}
     
  export default Profile;

  