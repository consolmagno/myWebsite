import styles from "./Tag.module.css"


export function Tag({title, tagOne}){
  return(
      <span className={ tagOne ? styles.tag_1 : styles.tag_2 }>{title}</span>
  )
}