import React from 'react';
import Tag from '../UIComponents/Tag/tag';
import style from './value.module.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Value = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Anime Interest Floor",
            "url": "https://yourwebsite.com",
            "logo": "https://yourwebsite.com/logo.png",
            "description": "Anime Interest Floor is a community that values inclusivity, respect, and open-mindedness. We foster an environment where people from various cultures and backgrounds can meet and grow together.",
            "ethicsPolicy": "https://cglink.me/2eC/d85e3a2dbafe8c650309914f4d5ef813e7a5833922412488d7ed566af38ed5e68",
            "foundingDate": "2010",
            "founder": {
              "@type": "Person",
              "name": "Anime God"
            },
            "slogan": "Inclusivity, Respect, Open-mindedness",
            "mission": "To promote a culture of inclusivity and respect within the community.",
            "values": [
              "Respect",
              "Open-mindedness",
              "Inclusivity"
            ]
          })}
        </script>
      </Helmet>

      <div className={style.aboutUsDescription}>
        <Tag content={"about-us"} color={"yellow"}></Tag>
        <h1 className={style.headings}>OUR VALUE.<br></br>Respect.</h1>
        <p className={style.paragraphPC}>
          <section>
            Enjoy meeting people from various cultures and backgrounds.
          </section>
          <section>
            We foster an environment that focuses on open-mindedness. 
          </section>
          <section>
            We promote a culture of inclusivity and respect. 
          </section>
        </p>

        <p className={style.paragraphMobile}>
          <section>
            Enjoy meeting people from various cultures and backgrounds.
            We foster an environment that focuses on open-mindedness. 
            We promote a culture of inclusivity and respect. 
          </section>
        </p>
      </div>
    </motion.div>
  )
}

export default Value;
