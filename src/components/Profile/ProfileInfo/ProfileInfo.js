import React from "react";
import './ProfileInfo.css'

const ProfileInfo = () => {
    return (
        <div className='profileInfo'>
            <div>
                <img className='fonImg' src={require('./pole.jpg')} />
            </div>
            <div>
                <img className='avatarImg' src={require('./face.jpg')} />
            </div>
        </div>
    );
}
export default ProfileInfo;