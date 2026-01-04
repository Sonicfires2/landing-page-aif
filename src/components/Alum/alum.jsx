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
      <h1 
        className={style.headings}
        tabIndex={0}
      >
        ALUMNI
      </h1>
      
      <a 
        className={style.skipLink} 
        href="#after-alumni"
        tabIndex={0}
      >
        Skip alumni list
      </a>

      <div className={style.containerAlum}>
        <ProfileCard name={"Louise Ziegler"} major={"Uhm, I forgor"} email={"lziegle2@u.rochester.edu"} extraDetails={"Former Supreme Commander"}></ProfileCard>     
        <ProfileCard name={"Caio"} major={"Biochemistry"} email={"No contact"} extraDetails={"An old comrad"}></ProfileCard>     
        <ProfileCard name={"Jonathan Wang"} major={"Computer Science, Math"} email={"No contact"} extraDetails={"GOAT CS #1"}></ProfileCard>     
        <ProfileCard name={"Alexis Chen"} major={"Brain and Cognitive Science, Psychology"} email={"No contact"} extraDetails={"Wildrift Challenger Rank"}></ProfileCard>     
        <ProfileCard name={"Rina Hata"} major={"No clue"} email={"No contact"} extraDetails={"Medicine practitioner"}></ProfileCard>     
        <ProfileCard name={"Minh Nguyen"} major={"Computer Science"} email={"mnguy31@u.rochester.edu"} extraDetails={"This website developer"}></ProfileCard>     
        <ProfileCard name={"Patrick Chao"} major={"Molecular genetics, Psychology"} email={"poseidon9873 (discord)"} extraDetails={"Board game investor"}></ProfileCard>
        <ProfileCard name={"Andrey Khalarmov"} major={"Chemistry"} email={"akharlam@u.rochester.edu"} extraDetails={"Former Vice Supreme Commander"}></ProfileCard>
        <ProfileCard name={"Elijah Ferreira"} major={"Biology"} email={"https://twitter.com/bomberbossart"} extraDetails={"Sonic fan"}></ProfileCard>
        <ProfileCard name={"Hisashi Lonske"} major={"Mechanical Engineering"} email={"Waiting for bro's work email"} extraDetails={"Bro printed out money from air"}></ProfileCard>
        <ProfileCard name={"Alex Rao"} major={"Optics, Physics"} email={"Idk, try LinkedIn"} extraDetails={"Arknight Enthusiast"}></ProfileCard>
        <ProfileCard name={"Adrian Kong"} major={"CS, DMS"} email={"akong3@u.rochester.edu"} extraDetails={"This website second developer"}></ProfileCard>
      </div>

      <div id="after-alumni" tabIndex={-1} />
    </motion.div>
  )
}

export default Alum;