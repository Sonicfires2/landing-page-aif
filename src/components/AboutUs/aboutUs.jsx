import ParallaxText from '../UIComponents/ParralaxTextSideWay/parralaxText';
import style from './aboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={style.aboutUs}>
      <div className={style.imageContainer}></div>
      <div className={style.textContainer}>
        <ParallaxText baseVelocity={-7}>ABOUT US</ParallaxText>
        <ParallaxText baseVelocity={7}>ABOUT US</ParallaxText>
      </div>
    </div>
  )
}

export default AboutUs;