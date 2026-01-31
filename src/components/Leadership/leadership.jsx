import React from 'react';
import style from './leadership.module.css';
import Tag from '../UIComponents/Tag/tag';
import ProfileCard from './Profile/profileCard';

const leadershipData = [
  {
    name: "Lily Cizewski",
    role: "President",
    // remark: "Eboard meeting in 10 minutes - be there or be square",
    imgLink: "leadersPictures/web_lily.png"
  },
  {
    name: "Lila Voytek",
    role: "Vice President",
    // remark: "Tatakae",
    imgLink: "leadersPictures/kirby_sleep.jpg"
  },
  {
    name: "Audrey Jung",
    role: "Housing Manager",
    // remark: "Hey, I didn't say this",
    imgLink: "leadersPictures/kirby_sleep.jpg"
  },
  {
    name: "Tate Lee",
    role: "Treasurer",
    // remark: "Skimming isn't stealing; it's just taking what's owed",
    imgLink: "leadersPictures/web_tate.jpg"
  },
  {
    name: "Adrian Kong",
    role: "Secretary/Web Manager",
    // remark: "Free Bloodborne",
    imgLink: "leadersPictures/kirby_sleep.jpg"
  },
  {
    name: "Michael Bass",
    role: "Librarian",
    // remark: "Remember to smile!",
    imgLink: "leadersPictures/kirby_sleep.jpg"
  },
  {
    name: "Saskia Erasmus",
    role: "Public Relation Manager",
    // remark: "What kind of children did they make this game for? Heian Era children?",
    imgLink: "leadersPictures/web_saskia.jpg"
  }
];

const LeadershipContainer = () => {
  return (
    <section 
      className={style.leadershipContainer}
      tabIndex={0}
      aria-label='The Leadership Section'
    >
      <Tag content={"Our-Team"} color={"yellow"} />
      <h1 
        className={style.headings}
        tabIndex={0}
      >
        OUR TEAM.<br />Talented.
      </h1>
      <div className={style.profileCardContainer}>
        {leadershipData.map((leader, index) => (
          <ProfileCard
            key={index}
            name={leader.name}
            role={leader.role}
            remark={leader.remark}
            imgLink={leader.imgLink}
          />
        ))}
      </div>
    </section>
  );
}

export default LeadershipContainer;
