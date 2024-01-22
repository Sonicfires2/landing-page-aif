import style from './button.module.css';
import React, { useRef } from 'react';

const HoverButton = () => {
  function scrollDownBy200px() {
    window.scrollBy({
      top: 600, // 200 pixels down
      left: 0,
      behavior: 'smooth'
    });
  }
  

  return (
    <div 
      className={style.container}
    >
      <button className={style.learnMore} onClick={scrollDownBy200px}>Learn more</button>
    </div>
  )
}

export default HoverButton;