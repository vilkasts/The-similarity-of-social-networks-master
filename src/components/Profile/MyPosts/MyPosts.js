import React from "react";
import './MyPosts.css'
import Post from "./Post/Post";

const MyPosts = ({ profilePage, onPostChange, addPost }) => {

    let posts = profilePage.posts.map(p => <Post message={p.message} id={p.id} />);
    let newPostText = profilePage.newPostText;

    let onSendPostClick = () => {
        addPost();
    };

    let onNewPostChange = (e) => {
        let text = e.target.value;
        onPostChange(text);
    };

    return (
        <div className='myPosts'>
            My Posts
                <div>
                    <textarea value={newPostText}
                              onChange={onNewPostChange}
                              placeholder="Enter your text"/>
                    <button onClick={onSendPostClick}>Add post</button>
                </div>
                <div className='posts'>
                    { posts }
                </div>
        </div>
    );
}

export default MyPosts;