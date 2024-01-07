import style from "./tag.module.css";

const Tag = ({content, color}) => {
  if (color === "red") {
    return (
      <span className={style.tagRed}>{content}</span>
    )
  } 
  else if (color === "yellow") {
    return (
      <span className={style.tagYellow}>{content}</span>
    )
  }
  else if (color === "black") {
    return (
      <span className={style.tagBlack}>{content}</span>
    )
  }
  else {
    return (
      <span className={style.tag}>{content}</span>
    )
  }
}

export default Tag;