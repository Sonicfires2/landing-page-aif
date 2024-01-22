import Tag from '../UIComponents/Tag/tag';
import ProfileCard from './Profile/profileCard';
import style from './alum.module.css';


const Alum = () => {
  return (
    <div className={style.alum}>
      <Tag content={"Alumni"}></Tag>
      <h1 className={style.headings}>
        ALUMNI
      </h1>
      <div className={style.containerAlum}>
        <ProfileCard name={"Caio"} major={"Biochemistry"} email={"No contact"}></ProfileCard>     
        <ProfileCard name={"Jonathan"} major={"Computer Science, Math"} email={"No contact"}></ProfileCard>     
        <ProfileCard name={"Alexis"} major={"Brain + medical"} email={"No contact"}></ProfileCard>     
        <ProfileCard name={"Rina"} major={"No clue"} email={"No contact"}></ProfileCard>     
      </div>
    </div>
  )
}

export default Alum;