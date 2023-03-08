import styles from './About.module.css'

import about_image from '../assets/about_image.png'

export function About(){
  return(
    <section className={styles.section_about} id="about">
      <img src={about_image} alt="" />
      <div className={styles.text_area}>
        <h2>Um pouco mais sobre mim</h2>
        <p>Sou formada em engenharia eletrônica pela Universidade de Brasília (UnB) e durante a faculdade fiz várias matérias com ênfase em engenharia biomédica. Em 2020 fiz estágio na Companhia de Água e Esgoto de Brasília (Caesb) trabalhando com a instrumentação, manutenção e desenvolvimento de painéis de controle.</p>
        <p>Além do mais trabalhei em empresas de construção civil, desenvolvimento sustentável e no mercado financeiro, sempre tendo que me reinventar e aprender com rapidez.</p>
        <p>Durante a pandemia (2021) iniciei alguns cursos de Design, ilustração, Ui / Ux e desenvolvimento web (front-end), e foi onde me encontrei profissionalmente. Dessa forma, atualmente estou em uma transição de carreira.</p>
        <span>Para entender mais sobre minha faculdade e carreira profissional só dar uma espiadinha na ilustração inicial </span>
      </div>

      
     
    </section>
  )
}