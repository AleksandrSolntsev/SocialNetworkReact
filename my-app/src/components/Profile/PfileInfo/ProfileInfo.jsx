import React from "react";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus"

const avaimg="https://www.clipartmax.com/png/middle/269-2695850_cat-icon-cat-icon-png.png";

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
        <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
        <a>Ava</a>
        <img src={avaimg}></img>
       </div>
    </div>
  );
};

export default ProfileInfo;
