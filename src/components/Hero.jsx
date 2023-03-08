import styles from './Hero.module.css'
import hero_ilustration from '../assets/hero_image.png'

export function Hero(){
  return(
    <section className={styles.hero_section} id='hero'>
      <img src={hero_ilustration} alt="Ilustração da vida academica e profissional da autora" />
      <div className={styles.text_area_hero}>
        <h2>
          Olá, eu sou a Sofia!
        </h2>
        <p>
        Uma engenheira eletrônica migrando para área de desenvolvimento web com ênfase em Front-end (HTML, CSS, Js e ReactJs).
        </p>
      </div>
      <div className={styles.divider}></div>
    </section>

  )
}
