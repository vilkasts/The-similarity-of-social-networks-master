import React from "react";
import './MyPosts.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { useDispatch, useSelector } from "react-redux";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {

    let state = useSelector(state => state).profilePage;
    let dispatch = useDispatch();

    let addPost = () => {
        dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        dispatch(updateNewPostTextActionCreator(text));
    };

  return <MyPosts addPost = { addPost }
                  onPostChange = { onPostChange }
                  profilePage={ state }/>
}

export default MyPostsContainer;