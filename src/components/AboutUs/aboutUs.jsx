import ParallaxText from '../UIComponents/ParralaxTextSideWay/parralaxText';
import style from './aboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={style.aboutUs}>
      <div className={style.imageContainer}
        aria-label='Image of the ABOUT US section'
        alt="A tower of party game boxes"
      ></div>
      <div 
        className={style.textContainer}
        role="title"
        aria-label='ABOUT US SECTION HEADER'
        tabIndex={0}
      >
        <ParallaxText baseVelocity={-7}>ABOUT US</ParallaxText>
        <ParallaxText baseVelocity={7}>ABOUT US</ParallaxText>
      </div>
    </div>
  )
}

export default AboutUs;