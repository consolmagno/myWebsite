import styles from './Card.module.css'
import { Tag } from './Tag'
import {Button} from './Button'


export function Card({title, image, tag_title, tag_title_2, btn_link}){
  return(
    <div className={styles.card}>
      <h3>{title}</h3>
      <img src={image} alt="" />
      <div className={styles.tags}>
        <Tag title={tag_title} tagOne />
        <Tag title={tag_title_2} />  
      </div>
      <Button link ={btn_link} title="Saiba mais"/>
    </div>
  )
}