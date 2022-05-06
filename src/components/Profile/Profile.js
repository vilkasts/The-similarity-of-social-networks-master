import React from "react";
import './Profile.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ store }) => {
  return (
    <div className='profileCounter'>
          <ProfileInfo/>
          <MyPostsContainer store = { store }/>
    </div>
  );
}

export default Profile;