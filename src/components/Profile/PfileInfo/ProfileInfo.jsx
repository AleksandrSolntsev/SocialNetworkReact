import React from "react";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithKooks from "./ProfileStatusWithHooks";

const avaimg="https://spng.pinpng.com/pngs/s/341-3415688_no-avatar-png-transparent-png.png";

const ProfileInfo = (props) => {
  ///props.profileData.photos.large
  if (!props.profileData) return <div>Loading...</div>
  return (
    <div>
      {/* <div className={styles.mainImgBlock}>
        <img src="https://panorama-zanzibar.com/wp-content/uploads/2021/05/Panoram-pic-90_90_1400x697.jpg"></img>
      </div> */}
      <div className={styles.descriptionBlock}>
        <img src ={props.profileData.photos.large}></img>
        <ProfileStatusWithKooks status={props.status} updateUserStatus={props.updateUserStatus}/>
        <a>Ava</a>
        <img src={avaimg}></img>
       </div>
    </div>
  );
};

export default ProfileInfo;
