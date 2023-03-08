import styles from './Header.module.css'
import logo from '../assets/logo.svg'
import { HashLink as Link} from 'react-router-hash-link'

export function Header(){
  return(
    <header className={styles.header}>
      <nav>
        <img src={logo} alt="Logomarca: variação da paleta de cores em formato circular" />
        <ul>
          <li><Link to="#hero" smooth className={styles.active}>Início</Link></li>
          <li><Link to="#about" smooth>Sobre</Link></li>
          <li><Link to="#portfolio"smooth>Portfólio</Link></li>
          <li><Link to="#contact" smooth>Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}