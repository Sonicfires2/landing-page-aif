import React from "react";
import style from './intro.module.css';
import HoverButton from "../UIComponents/Button/button";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className={style.overAllContainer}>
      <div className={style.textContainer}>
        <div className={style.buttonContainer} onClick={() => {console.log("Fuck")}}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <HoverButton></HoverButton>
          </motion.div>
        </div>
      </div> 
    </div>
  )
}

export default Intro;