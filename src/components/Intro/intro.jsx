import React from "react";
import style from './intro.module.css';
import HoverButton from "../UIComponents/Button/button";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Intro = () => {
  return (
    <div className={style.overAllContainer}>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Anime Interest Floor",
            "url": "https://sonicfires2.github.io/landing-page-aif",
            "logo": "https://sonicfires2.github.io/landing-page-aif/Untitled.png",
            "description": "Anime Interest Floor is a Special Interest Housing group and a community dedicated to fostering a love for anime and promoting cultural inclusivity."
          })}
        </script>
      </Helmet>

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
