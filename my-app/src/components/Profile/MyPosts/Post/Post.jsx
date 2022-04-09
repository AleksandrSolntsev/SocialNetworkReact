import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.items}>
      <img
        className={styles.avaimg}
        src="https://www.clipartmax.com/png/middle/269-2695850_cat-icon-cat-icon-png.png"
      ></img>
      {props.message}
      <div className={styles.likeBox}>
        <span>Like   {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
