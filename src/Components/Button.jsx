import styles from './Button.module.css'

export function Button ({title, link}){
  return(
    <a href={link} target="_blanck"><h3 className={styles.button}>{title}</h3></a>
    
  )
}