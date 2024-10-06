import React from "react";
import style from './intro.module.css';
import HoverButton from "../UIComponents/Button/button";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Intro = () => {
  return (
    <div className={style.overAllContainer}>
      <Helmet>
        <title>Anime Interest Floor</title>
        <meta name="description" content="Anime Interest Floor (AIF) is a Special Interest Housing group dedicated to fostering a love for anime and promoting cultural inclusivity. AIF welcomes all anime enthusiasts." />
        <meta name="keywords" content="Anime Interest Floor, AIF, aif, Aif, anime community, anime housing, special interest housing, anime culture, University of Rochester" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Anime Interest Floor (AIF)",
            "alternateName": "AIF",
            "url": "https://sonicfires2.github.io/landing-page-aif",
            "logo": "https://sonicfires2.github.io/landing-page-aif/Untitled1.png",
            "description": "Anime Interest Floor is a Special Interest Housing group and a community dedicated to fostering a love for anime and promoting cultural inclusivity."
          })}
        </script>
      </Helmet>

      <div className={style.textContainer}>
        <div className={style.buttonContainer}>
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
