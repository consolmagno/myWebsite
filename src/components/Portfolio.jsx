import styles from './Portfolio.module.css'
import { Card } from './Card'
import websiteGaya from "../assets/website_gaya.png"
// import website_inodonto from "../assets/website_inodonto.png"
// import website_doginc from "../assets/website_doginc.png"
// import iv_pri from "../assets/iv_pri.png"
// import website_receita from "../assets/website_receita.png"
// import website_roadmap from "../assets/website_roadmap.png"

export function Portfolio(){
  return(
    <div className={styles.section_portfolio}>
          <div className={styles.text_area_portfolio}>
          <h2>Portfólio</h2>
          <p> Projetos relacionados à desenvolvimento web, design e identidade visual elaborados nos últimos anos.</p>
          <div className={styles.cards}>
            {/* <Card title='Inodonto' image={website_inodonto} tag_title='web' tag_title_2='Em desenvolvimento'  btn_link='https://www.figma.com/proto/yCI6JYyzuVsZPSzlDzFhq9/Inodonto?page-id=1828%3A87&node-id=1832-82&viewport=1000%2C361%2C0.2&scaling=min-zoom'/> */}
            <Card title='Gaya Construtora' image={websiteGaya} tag_title='web' tag_title_2='Data: 2023' btn_link= "https://www.figma.com/proto/uP74vKKyTUAr24VJTd9bYt/Untitled?page-id=0%3A1&node-id=4-3&viewport=975%2C472%2C0.15&scaling=min-zoom&starting-point-node-id=4%3A3"/>
            {/* <Card title='Doginc.' image={website_doginc} tag_title='Ui/Ux'tag_title_2='Data: 2021' />
            <Card title='Pri' image={iv_pri} tag_title='Identidade Visual' tag_title_2='Data:2022'/>
            <Card title='Gerenciador de Receita' image={website_receita} tag_title='web' tag_title_2='Data: 2021'/>
            <Card title='Roadmap' image={website_roadmap} tag_title='Ui/Ux'tag_title_2='Data: 2022' btn_link= "https://www.figma.com/proto/hpmJAFvQIxMZZRdiUbQn0q/Roadmap?page-id=269%3A2&node-id=269-24&viewport=634%2C466%2C0.14&scaling=min-zoom&starting-point-node-id=269%3A24"/> */}
          </div>
      </div>
    </div>
  )
}