import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithKooks from "./ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/noava.png"
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataFormReduxForm from "./ProfileDataForm";

//const avaimg="https://spng.pinpng.com/pngs/s/341-3415688_no-avatar-png-transparent-png.png";

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false); //это массив из двух значений. [0] Значение [1] функция которая устанавливает это значение
   

  ///props.profileData.photos.large
  if (!props.profileData) return <div>Loading...</div>
  let onMainPhotoSelected = (e) => {
      if (e.target.files.length){
        props.savePhoto(e.target.files[0])
              }
  }
  const onSubmit = (formData) =>{
    props.saveProfile(formData);
    setEditMode(false);
  }

  return (
    <div>
      {/* <div className={styles.mainImgBlock}>
        <img src="https://panorama-zanzibar.com/wp-content/uploads/2021/05/Panoram-pic-90_90_1400x697.jpg"></img>
      </div> */}
      <div className={styles.descriptionBlock}>
        <img src ={props.profileData.photos.large || userPhoto} className={styles.mainPhoto}></img>
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

        {editMode ? 

        <ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={props.profileData}/> : 

        <ProfileDatas profileData={props.profileData} isOwner={props.isOwner} 
        goToEditMode={()=> {setEditMode(true)}}/>}
        
        <ProfileStatusWithKooks status={props.status} updateUserStatus={props.updateUserStatus}/>
        
       </div>
    </div>
  );
};
const ProfileDatas = (props) => {
  return <div>
    {props.isOwner &&<div><button onClick={props.goToEditMode}>Edit</button></div>}
          <div>
            <b>Full Name: </b> {props.profileData.fullName}
          </div>
          <div>
            <b>Looking for a job: </b> {props.profileData.lookingForAJob ? "Yes" : "No"}
            {props.profileData.lookingForAJob &&           
              <div>
                 <b>My Skills: </b> {props.profileData.lookingForAJobDescription}
             </div>}
          </div>
          <div>
            <b>About me: </b> {props.profileData.aboutMe}
          </div>
          <div>
            <b>Contacts: </b> {Object.keys(props.profileData.contacts).map(key =>{
              return <Contact key= {key} contactTitle={key} contactValue={props.profileData.contacts[key]} />
            })}
          </div>
        </div>
}


const Contact = ({contactTitle, contactValue}) => {
  return <div className={styles.contacts}> <b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo;
