import React, { useState } from 'react';
import style from './flipCard.module.css'; // Assume this is your CSS module file


const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const [copyFeedback, setCopyFeedback] = useState('CLICK FOR CONTACT');

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const copyToClipboard = async (text) => {
    if ('clipboard' in navigator) {
      console.log("COPIED", text);
      return await navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  };

  const handleCopyClick = async (text) => {
    try {
      await copyToClipboard(text);
      setCopyFeedback(`LINK COPIED!`);
      setTimeout(() => setCopyFeedback('CLICK FOR INFO'), 2000); // Hide feedback after 2 seconds
    } catch (err) {
      setCopyFeedback(`Failed to copy`);
    }
  };

  // Use template literals to concatenate class names properly
  const cardClassName = `${style.card} ${isFlipped ? style.flipped : ''}`;

  return (
    <div 
      className={style.flipCard} 
      id="flipCardID" 
      onClick={() => {handleFlip()}}
      tabIndex={0}
      aria-label={!isFlipped ? 'The contact us card that is flippable. The back side contain links' : ""}
      aria-controls='flipCardID'
      aria-expanded={isFlipped}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleFlip()
        } else {
          return
        }
      }}
    >
      <div className={cardClassName}>
        <div className={style.transparentCard}>
          <div className={style.innerBorder}></div>
        </div>        
        
        <div 
          className={style.cardFront}
        >       
          <div className={style.innerCard}>
            <div className={style.contactUs}>CONTACT US</div>
            <div className={style.anime}> ANIME INTEREST FLOOR</div>
            <div className={style.lineContainer}>
              <div className={style.line}></div>
              <div className={style.line}></div>
            </div>
            <div className={style.lineContainer}>
              <div className={style.lineShort}></div>
              <div className={style.lineShort}></div>
            </div>
            <div className={style.lineContainer}>
              <div className={style.lineShortShort}></div>
              <div className={style.lineShortShort}></div>
            </div>
            <div className={style.lineContainer}>
              <div className={style.lineShortShortShort}></div>
              <div className={style.feedback}>{copyFeedback}</div>
              <div className={style.lineShortShortShort}></div>
            </div>
            <div className={style.lineContainer}>
              <div className={style.lineShortShortShortShort}></div>
              <div className={style.lineShortShortShortShort}></div>
            </div>
            <div className={style.address} 
              tabIndex={!isFlipped ? 0 : -1}
              aria-label='We are located at: 7th Floor of Anderson Tower'
            >
              7th Floor of Anderson Tower
            </div>
            <div className={style.address}>University of Rochester</div>
          </div>
        </div>
        
        <div 
          className={style.cardBack}
          aria-hidden={!isFlipped}
        >
          <div className={style.innerCardBack}>
            <div className={style.gmail} 
              aria-hidden={!isFlipped}
              tabIndex={isFlipped ? 0 : -1}
              aria-label='Our Gmail Link. Click or press enter to copy to clip board and flip the card back over.'
              onClick={() => handleCopyClick('animeinterestfloor@gmail.com')}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCopyClick('animeinterestfloor@gmail.com');
                } else {
                  return;
                }
              }}
            > 
              <div className={style.gmailTitle}
                tabIndex={isFlipped ? 0 : -1}
                aria-label='We also have our Gmail address below'
              >
                GMAIL
              </div>
              <div 
                className={style.textDecoration}
                tabIndex={isFlipped ? 0 : -1}
              >
                animeinterestfloor@gmail.com
              </div>
            </div>
            <div className={style.insta} 
              aria-hidden={!isFlipped}
              onClick={() => handleCopyClick('https://www.instagram.com/uranimeinterestfloor/')}
              tabIndex={isFlipped ? 0 : -1}
              aria-label='Our Instagram Link. Click or press enter to copy to clip board and flip the card back over.'
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCopyClick('https://www.instagram.com/uranimeinterestfloor/');
                } else {
                  return;
                }
              }}
            >
              <div 
                className={style.gmailTitle}
                tabIndex={isFlipped ? 0 : -1}
                aria-label='We also have our Instagram Link below'
              >
                INSTAGRAM
              </div>
              <div 
                className={style.textDecoration}
                tabIndex={isFlipped ? 0 : -1}
              >              
                https://www.instagram.com/uranimeinterestfloor/
              </div>
            </div>
            <div className={style.insta} 
              aria-hidden={!isFlipped}
              onClick={() => handleCopyClick('https://linktr.ee/animeinterestfloor?lt_utm_source=lt_share_link#327583158')}
              tabIndex={isFlipped ? 0 : -1}
              aria-label='Our Link Tree Link that contains links to our other social media. Click or press enter to copy to clip board and flip the card back over.'
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCopyClick('https://linktr.ee/animeinterestfloor?lt_utm_source=lt_share_link#327583158');
                } else {
                  return;
                }
              }}
            >
              <div 
                className={style.gmailTitle}
                tabIndex={isFlipped ? 0 : -1}
                aria-label='We also have our Link Tree link below'
              >LINK TREE</div>
              <div 
                className={style.textDecoration}
                tabIndex={isFlipped ? 0 : -1}
              >
                https://linktr.ee/animeinterestfloor?lt_utm_source=lt_share_link#327583158
              </div>
            </div>
            <div 
              className={style.insta} 
              aria-hidden={!isFlipped}
              onClick={() => handleCopyClick('https://www.tiktok.com/@ur_aif')}
              tabIndex={isFlipped ? 0 : -1}
              aria-label='Our TikTok Link. Click or press enter to copy to clip board and flip the card back over.'
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCopyClick('https://www.tiktok.com/@ur_aif');
                } else {
                  return;
                }
              }}
            >
              <div 
                className={style.gmailTitle}
                tabIndex={isFlipped ? 0 : -1}
                aria-label='We also have our Tiktok link below.'
              >TIKTOK</div>
              <div 
                className={style.textDecoration}
                tabIndex={isFlipped ? 0 : -1}
              >
                https://www.tiktok.com/@ur_aif
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
