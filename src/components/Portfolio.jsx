import styles from './Portfolio.module.css'
import { Card } from './Card'
import websiteGaya from "../assets/website_gaya.png";
import websiteInodonto from "../assets/website_inodonto.png";
import websiteDoginc from "../assets/website_doginc.png";
import ivPri from "../assets/iv_pri.png";
import websiteGerenciamento from "../assets/website_gerenciamento.png";
import websiteRoadmap from "../assets/website_roadmap.png";

export function Portfolio(){
  return(
    <div className={styles.section_portfolio} id="portfolio">
          <div className={styles.text_area_portfolio}>
            <h2>Portfólio</h2>
            <p> Projetos relacionados à desenvolvimento web, design e identidade visual elaborados nos últimos anos.</p>
          </div>
          <div className={styles.cards}>
            <Card title='Inodonto' image={websiteInodonto} tag_title='Web' tag_title_2='Em desenvolvimento'  btn_link='https://www.figma.com/proto/yCI6JYyzuVsZPSzlDzFhq9/Inodonto?page-id=1828%3A87&node-id=1832-82&viewport=1000%2C361%2C0.2&scaling=min-zoom'/>
            <Card title='Gaya Construtora' image={websiteGaya} tag_title='Web' tag_title_2='Data: 2023' btn_link= "https://www.figma.com/proto/uP74vKKyTUAr24VJTd9bYt/Untitled?page-id=0%3A1&node-id=4-3&viewport=975%2C472%2C0.15&scaling=min-zoom&starting-point-node-id=4%3A3"/>
            <Card title='Doginc.' image={websiteDoginc} tag_title='UI/UX'tag_title_2='Data: 2021' btn_link= "https://www.figma.com/proto/JPSCeX6RkwmxdvU78plyuL/Doginc.?page-id=0%3A1&node-id=1-3059&viewport=718%2C477%2C0.08&scaling=min-zoom&starting-point-node-id=1%3A3059"/>
            <Card title='Pri' image={ivPri} tag_title='Identidade Visual' tag_title_2='Data:2022' btn_link= "https://www.figma.com/proto/K2RpssXS3H11RiUHZZVLUf/Pri?page-id=0%3A1&node-id=1-7&viewport=1337%2C424%2C0.07&scaling=min-zoom&starting-point-node-id=1%3A7"/>
            <Card title='Gerenciador de Receita' image={websiteGerenciamento} tag_title='Web' tag_title_2='Data: 2021' btn_link= "https://www.figma.com/proto/Bkm2s8stI5bfdZHy58OSci/Untitled?page-id=0%3A1&node-id=1-9&viewport=718%2C529%2C0.21&scaling=min-zoom"/>
            <Card title='Roadmap' image={websiteRoadmap} tag_title='UI/UX'tag_title_2='Data: 2022' btn_link= "https://www.figma.com/proto/hpmJAFvQIxMZZRdiUbQn0q/Roadmap?page-id=269%3A2&node-id=269-24&viewport=634%2C466%2C0.14&scaling=min-zoom&starting-point-node-id=269%3A24"/>
          </div>
    </div>
  )
}