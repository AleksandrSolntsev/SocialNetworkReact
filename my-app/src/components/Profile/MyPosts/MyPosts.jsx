import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
//import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'


const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let postsElements= props.posts.map(posts => <Post id={posts.id} message={posts.message} likes={posts.likes} />);
  
  let onAddPost = () => {
     props.addPost();
     //lastCh/// props.dispatch(addPostActionCreator()); ///Передаем в state тип ADD-POST
    }
     
  let onPostChange = () =>{
    let text = newPostElement.current.value;
    
    props.updateNewPostText (text);
    //lastCh/// let action= updateNewPostTextActionCreator (text);
    //LastCh/// props.dispatch(action); ///Передаем в state тип UPDATE-NEW-POST-TEXT
    }

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={ onAddPost }>Add Post</button>
        </div>
      </div>
      <div className={styles.messages}>
        { postsElements }
       </div>
    </div>
  );
};

export default MyPosts;
