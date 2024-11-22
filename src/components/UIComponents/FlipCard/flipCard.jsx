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
    <div className={style.flipCard} onClick={handleFlip}>
      <div className={cardClassName}>
        <div className={style.transparentCard}>
          <div className={style.innerBorder}></div>
        </div>        
        
        <div className={style.cardFront}>       
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
            <div className={style.address}>7th Floor of Anderson Tower</div>
            <div className={style.address}>University of Rochester</div>
          </div>
        </div>
        
        <div className={style.cardBack}>
          <div className={style.innerCardBack}>
            <div className={style.gmail} onClick={() => handleCopyClick('animeinterestfloor@gmail.com')}> 
              <div className={style.gmailTitle}>GMAIL</div>
              <div className={style.textDecoration}>animeinterestfloor@gmail.com</div>
            </div>
            <div className={style.insta} onClick={() => handleCopyClick('https://www.instagram.com/uranimeinterestfloor/')}>
              <div className={style.gmailTitle}>INSTAGRAM</div>
              <div className={style.textDecoration}>              
                https://www.instagram.com/uranimeinterestfloor/
              </div>
            </div>
            <div className={style.insta} onClick={() => handleCopyClick('https://discord.gg/mFRFgnJqgN')}>
              <div className={style.gmailTitle}>DISCORD</div>
              <div className={style.textDecoration}>
                https://discord.gg/HHUt5qBSx7
              </div>
            </div>
            <div className={style.insta} onClick={() => handleCopyClick('https://www.tiktok.com/@ur_aif')}>
              <div className={style.gmailTitle}>TIKTOK</div>
              <div className={style.textDecoration}>
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
