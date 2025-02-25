import React, { useState } from 'react';
import style from './ProfileCard.module.css'; // Ensure this CSS file exists

const ProfileCard = ({ name, role, remark, imgLink }) => {
  const [hovered, setHovered] = useState(false);

  // Change image only if the role is "Secretary" when hovered
  const displayImage =
    role === "Secretary" && hovered
      ? `${process.env.PUBLIC_URL}/leadersPictures/trueSecretary.jpg`
      : `${process.env.PUBLIC_URL}/${imgLink}`;

  return (
    <div
      className={style.profileCard}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={style.imageContainer}>
        <img src={displayImage} alt={name} />
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