import React, { useEffect, useState } from "react";
import styles from "./ProfileInfo.module.css";

const ProfileStatusWithKooks = (props) => {
   let [editMode, setEditMode] = useState(false); //это массив из двух значений. [0] Значение [1] функция которая устанавливает это значение
   let [status, setStatus] = useState(props.status);
   
   useEffect( ()=>{           //Вызывается тогда когда изменится статус в пропсах
     setStatus(props.status)
   }, [props.status] )


   const activateEditMode = () =>{
        setEditMode(true);
    }
    const deactivateEditMode = () =>{
        setEditMode(false);
        props.updateUserStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };
    
    return (
      <div>
        {!editMode &&
            <div>
            <span onDoubleClick={ activateEditMode }>{props.status || "------"}</span>
            </div>
        }
        {editMode &&
            <div>
            <input onChange={ onStatusChange } autoFocus={true} onBlur={ deactivateEditMode } value={status}/>
            </div>
        }
      </div>
    );
  }


export default ProfileStatusWithKooks;
