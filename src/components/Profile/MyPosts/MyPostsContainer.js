import React from "react";
import './MyPosts.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ store }) => {

    let state = store.getState().profilePage;

    let addPost = () => {
        store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text));
    };

  return <MyPosts addPost = { addPost }
                  onPostChange = { onPostChange }
                  profilePage={ state }/>
}

export default MyPostsContainer;