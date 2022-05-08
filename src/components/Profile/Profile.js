import React from "react";
import './Profile.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <div className='profileCounter'>
          <ProfileInfo/>
          <MyPostsContainer />
    </div>
  );
}

export default Profile;