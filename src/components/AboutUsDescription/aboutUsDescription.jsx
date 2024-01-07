import Tag from '../UIComponents/Tag/tag';
import style from './aboutUsDescription.module.css'
import {motion} from 'framer-motion'

const AboutUsDescription = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className={style.aboutUsDescription}>
        <Tag content={"about-us"}></Tag>
        <h1 className={style.headings}>A Living Space.<br></br>Reimagined.</h1>
        <p className={style.paragraphPC}>
          <section>
            Immerse, explore and enjoy Anime with a community 
            that share similar interests.
          </section>
          <section>
            Meet your gamers, programmers, STEM-enjoyer and artists 
            living next door. 
          </section>
          <section>
            Come join us in our gaming nights, anime showing and 
            anime-con. 
          </section>
        </p>

        <p className={style.paragraphMobile}>
          <section>
            Immerse, explore and enjoy Anime with a community 
            that share similar interests.
            Meet your gamers, programmers, STEM-enjoyer and artists 
            living next door. 
            Come join us in our gaming nights, anime showing and 
            anime-con. 
          </section>
        </p>
      </div>
    </motion.div>
  )
}

export default AboutUsDescription;