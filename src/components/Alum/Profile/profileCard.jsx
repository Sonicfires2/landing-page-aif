import React from 'react';
import style from './ProfileCard.module.css'; // Make sure to create this CSS file

const ProfileCard = ({name, major, email}) => {
  return (
    <div className={style.profileCard}>
      <div className={style.ProfileSection}>{name}</div>
      <div className={style.ProfileSection}>{major}</div>
      <div className={style.ProfileSection}>{email}</div>
    </div>
  );
};

export default ProfileCard;
