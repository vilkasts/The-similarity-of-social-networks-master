import React from "react";
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ postsData }) => {
  return (
    <div className='profileCounter'>
          <ProfileInfo/>
          <MyPosts postsData={postsData}/>
    </div>
  );
}
export default Profile;