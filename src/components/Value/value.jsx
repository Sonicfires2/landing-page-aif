import Tag from '../UIComponents/Tag/tag';
import style from './value.module.css'
import { motion } from "framer-motion";

const Value = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -400 }}
      whileInView={{ opacity: 1, x: 0}}
      transition={{ duration: 1.5 }}
    >
      <div className={style.aboutUsDescription}>
        <Tag content={"about-us"} color={"yellow"}></Tag>
        <h1 className={style.headings}>OUR VALUE.<br></br>Respect.</h1>
        <p className={style.paragraphPC}>
          <section>
            Enjoy meeting people from the various culture and backgrounds.
          </section>
          <section>
            We foster an environment that focus on open-mindedness. 
          </section>
          <section>
            We promote a culture of inclusivity and respect. 
          </section>
        </p>

        <p className={style.paragraphMobile}>
          <section>
            Enjoy meeting people from the various culture and backgrounds.
            We foster an environment that focus on open-mindedness. 
            We promote a culture of inclusivity and respect. 
          </section>
        </p>
      </div>
    </motion.div>
  )
}

export default Value;