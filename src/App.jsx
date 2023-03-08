import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

import './global.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <div>
        <Header/>
        <Hero/>
        <About/>
        <Portfolio/>
        <Footer/>
      </div>
    </BrowserRouter>
    
  )

}

export default App
