import logo from "../assets/logo.svg"
import mail from "../assets/icon_mail.svg"
import git from "../assets/icon_git.svg"
import linkedin from "../assets/icon_in.svg"
import styles from "./Footer.module.css"

export function Footer(){
  return(
    <div className={styles.footer_section}>
      <div className={styles.container}>
        <img src={logo} alt="Logotipo"/>
        <ul>
          <li><a href="mailto:sofiaconsolmagno@gmail.com" target="_blanck"><img src={mail} alt="icone e-mail" />
          sofiaconsolmagno@gmail.com</a></li>
          <li><a href="https://github.com/consolmagno" target="_blanck"><img src={git} alt="icone Github" />@consolmagno</a></li>
          <li><a href="https://www.linkedin.com/in/sofia-consolmagno" target="_blanck"><img src={linkedin} alt="icone Linkedin" />sofia-consolmagno</a></li>
        </ul>
      </div>
    </div>
  )
}