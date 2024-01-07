import React from 'react';
import style from './footer.module.css';

const Footer = () => {

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
