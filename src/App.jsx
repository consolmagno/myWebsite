import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';

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
