  import './App.css';
  import "./index.css"
  import Header from './components/headers/header';
import Hero from './components/hero';
import Logos from './components/logos';
import Bests from './components/bests';
import Ourvalue from './components/Ourvalue';
import Contact from './components/contactus';
import Getstart from './components/getstarted';
import Footer from './components/footer';

function App() {
  return (
    <div className='app'>
      <div>
        <div className='whitegradient' style={{overFlow:"hidden"}}/>
          <Header/> 
          <Hero/>
        </div>
        <Logos/>
        <Bests/>
        <Ourvalue/>
        <Contact/>
        <Getstart/>
        <Footer/>
    </div>
  );
}

export default App;
