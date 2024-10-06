import React from 'react';
import Tag from '../UIComponents/Tag/tag';
import style from './aboutUsDescription.module.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const AboutUsDescription = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Helmet>
        <title>Anime Interest Floor (AIF)</title>
        <meta name="description" content="Anime Interest Floor (AIF) is a Special Interest Housing group dedicated to fostering a love for anime and promoting cultural inclusivity. AIF welcomes all anime enthusiasts." />
        <meta name="keywords" content="Anime Interest Floor, AIF, aif, anime community, anime housing, special interest housing, anime culture" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Anime Interest Floor",
            "alternateName": "AIF",            
            "url": "https://yourwebsite.com",
            "logo": "https://yourwebsite.com/logo.png",
            "description": "Anime Interest Floor is a vibrant community where members immerse themselves in anime culture, gaming, and STEM activities. Join us for gaming nights, anime showings, and anime-con events.",
            "memberOf": {
              "@type": "EducationalOrganization",
              "name": "University of Rochester",
              "url": "https://www.rochester.edu"
            },
            "location": {
              "@type": "Place",
              "name": "Anime Interest Floor Dormitory",
              "alternateName": "AIF",            
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "7th Floor, Anderson Tower",
                "addressLocality": "Rochester",
                "addressRegion": "NY",
                "postalCode": "14627",
                "addressCountry": "US"
              }
            },
            "foundingDate": "2010",
            "founders": [{
              "@type": "Person",
              "name": "Anime God"
            }],
            "keywords": ["Anime", "Gaming", "STEM", "Community", "University", "AIF", "aif", "Aif", "Interest Floor"],
            "slogan": "A Living Space Reimagined",
            "events": [
              {
                "@type": "Event",
                "name": "Gaming Night",
                "startDate": "2024-09-01T19:00",
                "location": {
                  "@type": "Place",
                  "name": "Anime Interest Floor Lounge",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Anderson Tower, 7th Floor",
                    "addressLocality": "Rochester",
                    "addressRegion": "NY",
                    "postalCode": "14627",
                    "addressCountry": "US"
                  }
                }
              },
              {
                "@type": "Event",
                "name": "Anime Showing",
                "startDate": "2024-09-08T19:00",
                "location": {
                  "@type": "Place",
                  "name": "Anime Interest Floor Lounge",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Anderson Tower, 7th Floor",
                    "addressLocality": "Rochester",
                    "addressRegion": "NY",
                    "postalCode": "14627",
                    "addressCountry": "US"
                  }
                }
              },
              {
                "@type": "Event",
                "name": "Anime-Con",
                "startDate": "2024-10-15T10:00",
                "location": {
                  "@type": "Place",
                  "name": "University of Rochester Convention Center",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "123 Main St",
                    "addressLocality": "Rochester",
                    "addressRegion": "NY",
                    "postalCode": "14623",
                    "addressCountry": "US"
                  }
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className={style.aboutUsDescription}>
        <Tag content={"about-us"}></Tag>
        <h1 className={style.headings}>A Living Space.<br></br>Reimagined.</h1>
        <p className={style.paragraphPC}>
          <section>
            Immerse, explore and enjoy Anime with a community 
            that share similar interests.
          </section>
          <section>
            Meet your gamers, programmers, STEM enjoyers and artists 
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
