import React from 'react';
import style from './leadership.module.css';
import Tag from '../UIComponents/Tag/tag';
import ProfileCard from './Profile/profileCard';

const leadershipData = [
  {
    name: "Louise Ziegler",
    role: "President",
    remark: "Eboard meeting in 10 minutes - be there or be square",
    imgLink: "leadersPictures/president.png"
  },
  {
    name: "Andrey Kharlamov",
    role: "Vice President",
    remark: "Tatakae",
    imgLink: "leadersPictures/vicePresident.jpg"
  },
  {
    name: "Lily Cizewski",
    role: "Housing Manager",
    remark: "Hey, I didn't say this",
    imgLink: "leadersPictures/housingManager.png"
  },
  {
    name: "Hisashi Lonske",
    role: "Treasurer",
    remark: "Skimming isn't stealing; it's just taking what's owed",
    imgLink: "leadersPictures/treasurer.png"
  },
  {
    name: "Taylor Klein",
    role: "Secretary",
    remark: "Wait I need a quote?",
    imgLink: "leadersPictures/secretary.jpg"
  },
  {
    name: "Sunny Wu",
    role: "Librarian",
    remark: "You got me!",
    imgLink: "leadersPictures/librarian.jpg"
  },
  {
    name: "Minh Nguyen",
    role: "Web Manger",
    remark: "Lorem ipsum dolor...",
    imgLink: "leadersPictures/webManager.jpeg"
  },
  {
    name: "Elijah Ferreira",
    role: "Public Relation Manager",
    remark: "What kind of children did they make this game for? Heian Era children?",
    imgLink: "leadersPictures/publicRelationManager.png"
  }
];

const LeadershipContainer = () => {
  return (
    <section className={style.leadershipContainer}>
      <Tag content={"Our-Team"} color={"yellow"} />
      <h1 className={style.headings}>OUR TEAM.<br />Talented.</h1>
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
