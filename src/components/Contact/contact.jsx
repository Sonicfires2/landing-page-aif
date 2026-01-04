import FlipCard from "../UIComponents/FlipCard/flipCard";
import style from './contact.module.css'
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div 
      className={style.contactContainer}
      tabIndex={0}
      aria-label="The contact us section"
    >
      <motion.div
        initial={{ opacity: 0, y: 300}}
        whileInView={{ opacity: 1, when: "center", y:0}}
        transition={{ duration: 1 }}
      >
        <FlipCard></FlipCard>
      </motion.div>
    </div>
  )
}

export default Contact;