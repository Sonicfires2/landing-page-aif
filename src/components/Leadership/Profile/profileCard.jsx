import React from 'react';
import style from './ProfileCard.module.css'; // Make sure to create this CSS file

const ProfileCard = ({name, role, remark, imgLink}) => {
  return (
    <div className={style.profileCard}>
      <div className={style.imageContainer}>
        <img           
          src={`${process.env.PUBLIC_URL}/${imgLink}`} 
        />
      </div>
      <div className={style.leaderTextContainer}>
        <div className={style.ProfileSection}><b>{name}</b></div>
        <div className={style.ProfileSection}>{role}</div>
        <div className={style.ProfileSection}>"{remark}"</div>
      </div>
    </div>
  );
};

export default ProfileCard;
