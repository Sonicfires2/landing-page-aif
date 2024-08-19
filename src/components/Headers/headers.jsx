import React, {useState, useEffect} from "react";
import styles from './headers.module.css';

const Headers = () => {
  
  return (
    <div className={styles.headers}>
      <nav className={styles.headersContainer}>
        <span className={styles.title}>
          AIF
        </span>
        <ul className={styles.headerLinks}>
        </ul>
      </nav>
    </div>  
  )
}

export default Headers; 