import Tag from '../UIComponents/Tag/tag';
import ProfileCard from './Profile/profileCard';
import style from './alum.module.css';
import {motion} from 'framer-motion'

const Alum = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className={style.alum}
    >
      <Tag content={"Alumni"}></Tag>
      <h1 className={style.headings}>
        ALUMNI
      </h1>
      <div className={style.containerAlum}>
        <ProfileCard name={"Caio"} major={"Biochemistry"} email={"No contact"}></ProfileCard>     
        <ProfileCard name={"Jonathan"} major={"Computer Science, Math"} email={"No contact"}></ProfileCard>     
        <ProfileCard name={"Alexis"} major={"Brain + medical"} email={"No contact"}></ProfileCard>     
        <ProfileCard name={"Rina"} major={"No clue"} email={"No contact"}></ProfileCard>     
        <ProfileCard name={"Minh"} major={"Computer Science"} email={"mnguy31@u.rochester.edu"}></ProfileCard>     
      </div>
    </motion.div>
  )
}

export default Alum;