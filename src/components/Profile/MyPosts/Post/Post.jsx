import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.items}>
      <img
        className={styles.avaimg}
        src="https://spng.pinpng.com/pngs/s/341-3415688_no-avatar-png-transparent-png.png"
      ></img>
      {props.message}
      <div className={styles.likeBox}>
        <span>Like   {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
