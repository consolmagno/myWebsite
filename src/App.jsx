import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { About } from './Components/About';
import { Portfolio } from './Components/Portfolio';

import './global.css'
import styles from './App.module.css'


function App() {
  return(
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Hero/>
        <About/>
        <Portfolio/>
      </div>

    </div>
    
  )

}

export default App
