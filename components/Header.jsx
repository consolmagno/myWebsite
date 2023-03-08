import styles from './Header.module.css'
import logo from '../assets/logo.svg'

export function Header(){
  return(
    <header className={styles.header}>
      <nav>
        <img src={logo} alt="Logomarca: variação da paleta de cores em formato circular" />
        <ul>
          <li><a href="">Início</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">Portfólio</a></li>
          <li><a href="">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}