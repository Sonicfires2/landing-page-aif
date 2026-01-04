import React from 'react';
import style from './houseApplication.module.css';
import ParallaxText from '../UIComponents/ParralaxTextSideWay/parralaxText';
import { Helmet } from 'react-helmet';

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9qAUowE-9A-oPg6C3xWD1VmqRJ6m2Rp4BG_dHmU2BOL7Nlw/viewform?usp=send_form";

function goToApply() {
  window.location.assign(APPLY_URL);
}

function onKeyActivate(e) {
  // Enter should activate links
  if (e.key === "Enter") {
    e.preventDefault();
    goToApply();
  }
  // Space is not standard for links, but many teams support it for div-based "clickables"
  if (e.key === " ") {
    e.preventDefault();
    goToApply();
  }
}

const HousingApplication = () => {
  return (
    <div id={style.housingInfo}> 
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

      <div
        className={style.container}
        role="link"
        tabIndex={0}
        aria-label="Housing application (opens form)"
        onClick={goToApply}
        onKeyDown={onKeyActivate}
      >
        <ParallaxText 
          baseVelocity={-4}
        >
          HOUSING APPLICATION
        </ParallaxText>
        <ParallaxText 
          baseVelocity={4}
        >
          WE ARE OPEN!
        </ParallaxText>
        <ParallaxText 
          baseVelocity={4}   
        >
          ClICK TO APPLY!
        </ParallaxText>
        <ParallaxText baseVelocity={-4}>HOUSING APPLICATION</ParallaxText>
      </div>
    </div>
  );
}

export default HousingApplication;
