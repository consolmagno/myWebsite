import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

import './global.css'

function App() {
  return(
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Footer/>
    </div>
    
  )

}

export default App
