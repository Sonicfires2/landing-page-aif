import style from './button.module.css';

const HoverButton = () => {
  return (
    <div className={style.container}>
      <button className={style.learnMore}>Learn more</button>
    </div>
  )
}

export default HoverButton;