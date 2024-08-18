import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './activity.module.css';
import Tag from '../UIComponents/Tag/tag';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ title, description }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className={styles.parallaxContainer}>
      <div ref={ref} className={styles.imageContainer}>
      <img 
        src={`${process.env.PUBLIC_URL}/${title}.png`} 
        alt={title} 
        className={styles.image} 
      />
      </div>
      <motion.h2 style={{ y }} className={styles.imageTitle}>
        <div>
          {title}
          <p className={styles.paragraph}>
            {description}
          </p>
        </div>
      </motion.h2>
    </section>
  );
}

function ImageMobile({ title, description }) {
  return (
    <section className={styles.parallaxContainer}>
      <div className={styles.imageContainer}>
      <img 
        src={`${process.env.PUBLIC_URL}/${title}.png`} 
        alt={title} 
        className={styles.image} 
      />
      </div>
      <h2 className={styles.imageTitle}>
        <div>
          {title}
          <p className={styles.paragraph}>
            {description}
          </p>
        </div>
      </h2>
    </section>
  );
}

function Leader() {
  const [eventInfo, setEventInfo] = useState([
    {
      title: "TORA CON",
      description: "Experience a thrilling world of anime culture!",
    },
    {
      title: "ANIME SHOWING",
      description: "Every Saturday 6 PM to 8:30 PM at Morey 321 :D",
    },
    {
      title: "SAITAMAGO",
      description: "The Easter Egg Hunt revamped!",
    }
  ]);

  return (
    <div className={styles.LeaderContainer}>
      <Tag content={"floor-activity"} color={"yellow"}></Tag>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, when: "center", x: 0}}
        transition={{ duration: 1.5 }}
      >
        <h1 className={styles.title}>
          OUR ACTIVITY. 
        </h1>
      </motion.div>
      <Tag content={"anime-flavored"} color={"yellow"}></Tag>
      <div className={styles.leaderPosListing}>
        {eventInfo.map((event) => (
          <Image key={event.title} title={event.title} description={event.description}/>
        ))}
      </div>
      <div className={styles.leaderPosListingMobile}>
        {eventInfo.map((event) => (
          <ImageMobile key={event.title} title={event.title} description={event.description}/>
        ))}
      </div>
    </div>
  );
}

export default Leader;
