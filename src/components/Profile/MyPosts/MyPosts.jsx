import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10);
const MyPosts = (props) => {
  let postsElements= props.posts.map(posts => <Post id={posts.id} message={posts.message} likes={posts.likes} />);
  
  let onAddPost = (postText) => {
     props.addPost(postText.newPostBody);
     }
     
  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
        <AddPostFormRedux onSubmit={onAddPost}/>
      <div className={styles.messages}>
        { postsElements }
       </div>
    </div>
  );
};

const AddPostForm = (props) =>{
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea}  name={"newPostBody"} validate={[requiredField, maxLength10]} placeholder={"Enter You Message"} />
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </form>
  )
}
const AddPostFormRedux = reduxForm ({form: "postAddMessageForm"})(AddPostForm)

export default MyPosts;
