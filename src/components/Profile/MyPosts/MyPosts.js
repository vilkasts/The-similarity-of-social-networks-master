import React from "react";
import './MyPosts.css'
import Post from "./Post/Post";

const MyPosts = ({ postsData }) => {

    let posts = postsData.map(p => <Post message={p.message} id={p.id} />);

  return (
    <div className='myPosts'>
      My Posts
      <div>
        <textarea/>
        <button>Add post</button>
      </div>
      <div className='posts'>
          { posts }
      </div>
    </div>
);
}
export default MyPosts;