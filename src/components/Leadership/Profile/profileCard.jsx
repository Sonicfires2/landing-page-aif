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
      tabIndex={0}
      aria-label={'The card for the ' + role + " leadership position"}
    >
      <div className={style.imageContainer}>
        <img 
          src={displayImage} 
          alt={name} 
        />
      </div>
      <div className={style.leaderTextContainer}>
        <div className={style.ProfileSection}>
          <b 
            tabIndex={0}
            aria-label={'name is ' + name}
          >
              {name}
          </b>
        </div>
        <div 
          className={style.ProfileSection} 
          tabIndex={0}
        >
          {role}
        </div>
        <div 
          className={style.ProfileSection}
          tabIndex={0}
          aria-label={"This is a quote from that person: " + remark}
        >"{remark}"</div>
      </div>
    </div>
  );
};

export default ProfileCard;