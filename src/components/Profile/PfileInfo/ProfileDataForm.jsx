import React from "react"
import styles from "./ProfileInfo.module.css";
import stylesEr from "../../common/FormsControls/FormsControls.module.css"
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";

const ProfileDataForm = ({handleSubmit, initialValues, error}) => {

    return <form onSubmit={handleSubmit}>
    <div><button>Save</button></div>
    {error && <div className={stylesEr.formSummaryError}>{error}</div>}
          <div>
            <b>Full Name: </b> {createField("Full Name", "fullName", [], Input,)} 
            
          </div>
          <div>
            <b>Looking for a job: </b> {createField("", "lookingForAJob", [], Input, {type:"checkbox"})} 
           
                               
              <div>
                 <b>My Skills: </b> 
                 {createField("My Skills", "lookingForAJobDescription", [], Textarea)}
             </div>
          </div>
          <div>
            <b>About me: </b>
            {createField("About me", "aboutMe", [], Textarea)}
          </div>
          <div>
            <b>Contacts: </b> {Object.keys(initialValues.contacts).map(key =>{
              return <div key={key} className={styles.contacts}>
              <b>{key}: {createField(key, "contacts."+key, [], Input, Input)}</b></div>

              // return <Contact key= {key} contactTitle={key} contactValue={props.profileData.contacts[key]} />
            })}
          </div>
        </form>
  }

  const  ProfileDataFormReduxForm = reduxForm ({form: 'edit-profile'})(ProfileDataForm)
  export default ProfileDataFormReduxForm;