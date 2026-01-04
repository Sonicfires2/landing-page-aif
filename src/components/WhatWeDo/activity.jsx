import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet';
import styles from './activity.module.css';
import Tag from '../UIComponents/Tag/tag';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ title, description, altText }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className={styles.parallaxContainer}>
      <div ref={ref} className={styles.imageContainer}>
        <img 
          src={`${process.env.PUBLIC_URL}/images/${title}.png`} 
          className={styles.image} 
          alt={altText}
          tabIndex={0}
          aria-label={"Image of the " + title + " event."}
        />
      </div>
      <motion.h2 style={{ y }} className={styles.imageTitle}>
        <div>
          <h5
            aria-label={"Title of " + title}
            tabIndex={0}
          >
            {title}
          </h5>
          <p 
            className={styles.paragraph}
            tabIndex={0}
          >
            {description}
          </p>
        </div>
      </motion.h2>
    </section>
  );
}

function ImageMobile({ title, description, altText }) {
  return (
    <section className={styles.parallaxContainer}>
      <div className={styles.imageContainer}>
        <img 
          src={`${process.env.PUBLIC_URL}/images/${title}.png`} 
          className={styles.image} 
          alt={altText}
          tabIndex={0}
        />
      </div>
      <h2 className={styles.imageTitle}>
        <div>
          <h5
            role="title"
            aria-label={"Title of " + title}
            tabIndex={0}
          >
            {title}
          </h5>
          <p 
            className={styles.paragraph}
            tabIndex={0}
          >
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
      altText: "Anime Convention at Rochester Institution of Technology",
      startDate: "2024-09-25T19:00",
      location: {
        name: "RIT Convention Center",
        streetAddress: "123 Main St",
        addressLocality: "Rochester",
        postalCode: "14623",
        addressCountry: "US"
      },
      image: `${process.env.PUBLIC_URL}/TORA_CON.png`,
      price: "Free if you volunteer",
      priceCurrency: "USD"
    },
    {
      title: "ANIME SHOWING",
      description: "Every Saturday 6 PM to 8:30 PM at Morey 321 :D",
      altText: "Weekly anime showing to serve the UofR community.",
      startDate: "2024-09-30T18:00",
      location: {
        name: "Morey 321",
        streetAddress: "University of Rochester",
        addressLocality: "Rochester",
        postalCode: "14627",
        addressCountry: "US"
      },
      image: `${process.env.PUBLIC_URL}/ANIME_SHOWING.png`,
      price: "Free",
      priceCurrency: "USD"
    },
    {
      title: "SAITAMAGO",
      description: "The Easter Egg Hunt revamped!",
      altText: "The Anime Interest Floor's own take on Easter holiday!",
      startDate: "2024-04-12T10:00",
      location: {
        name: "RIT Main Quad",
        streetAddress: "123 Quad St",
        addressLocality: "Rochester",
        postalCode: "14623",
        addressCountry: "US"
      },
      image: `${process.env.PUBLIC_URL}/SAITAMAGO.png`,
      price: "Free",
      priceCurrency: "USD"
    }
  ]);

  const generateEventSchema = (event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "startDate": event.startDate,
    "location": {
      "@type": "Place",
      "name": event.location.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": event.location.streetAddress,
        "addressLocality": event.location.addressLocality,
        "postalCode": event.location.postalCode,
        "addressCountry": event.location.addressCountry
      }
    },
    "image": [event.image],
    "description": event.description,
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "price": event.price,
      "priceCurrency": event.priceCurrency,
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString()
    },
    "performer": {
      "@type": "PerformingGroup",
      "name": "Anime Interest Floor"
    }
  });

  return (
    <div className={styles.LeaderContainer}>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": eventInfo.map((event, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": generateEventSchema(event)
            }))
          })}
        </script>
      </Helmet>
      <Tag content={"floor-activity"} color={"yellow"}></Tag>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, when: "center", x: 0}}
        transition={{ duration: 1.5 }}
      >
        <h1 className={styles.title}
          tabIndex={0}
          aria-label='Our Activity Section Label'
          role="title"
        >
          OUR ACTIVITY. 
        </h1>
      </motion.div>
      <Tag content={"anime-flavored"} color={"yellow"}></Tag>
      <div className={styles.leaderPosListing}>
        {eventInfo.map((event) => (
          <Image key={event.title} title={event.title} description={event.description} altText={event.altText}/>
        ))}
      </div>
      <div className={styles.leaderPosListingMobile}>
        {eventInfo.map((event) => (
          <ImageMobile key={event.title} title={event.title} description={event.description} altText={event.altText}/>
        ))}
      </div>
    </div>
  );
}

export default Leader;
