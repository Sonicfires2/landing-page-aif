import React from 'react';
import style from './houseApplication.module.css'; // Import the CSS module
import ParallaxText from '../UIComponents/ParralaxTextSideWay/parralaxText';
import Tag from '../UIComponents/Tag/tag';

const HousingApplication = () => {
  return (
    <div id={style.housingInfo}> 
      <div className={style.container}>
        {/* <Tag content={"housing-application"} color={"black"}></Tag> */}
        <ParallaxText baseVelocity={-4}>HOUSING APPLICATION</ParallaxText>
        <ParallaxText baseVelocity={4}>WE ARE CLOSED</ParallaxText>
        <ParallaxText baseVelocity={-4}>HOUSING APPLICATION</ParallaxText>
      </div>
      {/* <Contact></Contact> */}
    </div>
  );
}

export default HousingApplication;
