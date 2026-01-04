import style from "./tag.module.css";

const Tag = ({content, color}) => {
  if (color === "red") {
    return (
      <span 
        tabIndex={0}
        aria-label={content + " tag"}
        aria-description="Use for visual seperation of sections and for accessibilty features that show seperation of sections"
        className={style.tagRed}>{content}
      </span>
    )
  } 
  else if (color === "yellow") {
    return (
      <span 
        tabIndex={0}
        aria-label={content + " tag"}
        aria-description="Use for visual seperation of sections and for accessibilty features that show seperation of sections"
        className={style.tagYellow}>{content}
      </span>
    )
  }
  else if (color === "black") {
    return (
      <span 
        tabIndex={0}
        aria-label={content + " tag"}
        aria-description="Use for visual seperation of sections and for accessibilty features that show seperation of sections"
        className={style.tagBlack}>{content}
      </span>
    )
  }
  else {
    return (
      <span 
        tabIndex={0}
        aria-label={content + " tag"}
        aria-description="Use for visual seperation of sections and for accessibilty features that show seperation of sections"
        className={style.tag}>{content}
      </span>
    )
  }
}

export default Tag;