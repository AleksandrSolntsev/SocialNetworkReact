import React from "react";
import styles from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog}>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? styles.active : "inactive")}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
