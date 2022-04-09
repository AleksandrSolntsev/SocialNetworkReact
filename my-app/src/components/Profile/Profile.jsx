import React from "react";
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./PfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
// console.log(props.profileState.posts)

  return (
    <div className={styles.profileBox}>
          <ProfileInfo profileData= {props.profileData}/>
          <MyPostsContainer store = {props.store}/>
          </div>
      )}
     
  export default Profile;

  