import React from 'react';
import style from './footer.module.css';
import { Helmet } from 'react-helmet';

const Footer = () => {
  <Helmet>
    <title>Anime Interest Floor (AIF)</title>
    <meta name="description" content="Anime Interest Floor (AIF) is a Special Interest Housing group dedicated to fostering a love for anime and promoting cultural inclusivity. AIF welcomes all anime enthusiasts." />
    <meta name="keywords" content="Anime Interest Floor, AIF, aif, anime community, anime housing, special interest housing, anime culture" />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Anime Interest Floor (AIF)",
        "alternateName": "AIF",            
        "url": "https://sonicfires2.github.io/landing-page-aif",
        "description": "Anime Interest Floor Housing provides a living space for anime enthusiasts. Currently, the housing application process is closed.",
        "housingPolicy": {
          "@type": "Policy",
          "name": "Housing Application Policy",
          "status": "Closed",
          "startDate": "2024-01-01",
          "endDate": "2024-12-31",
          "url": "https://yourwebsite.com/housing-policy"
        }
      })}
    </script>
  </Helmet>

  return (
    <div className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.credit}>
          Programmed and designed by Minh Nguyen   
        </div>
        <div className={style.credit}>
          © 2024 Anime Interest Floor
        </div>
      </div>
    </div>
  );
};

export default Footer;
