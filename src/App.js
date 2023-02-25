import Aos from 'aos';
import 'aos/dist/aos.css';
import {About, Copyright, Ctasection,Features, Footer, Header, Hero, Nav, TestimonialSlider, Testinonials } from './components';

function App() {
  Aos.init({
    duration: 1000,
    offset: 0,
  });
  return (
    <div className="App">
      <>
        <Hero />
      </>
    </div>
  );
}

export default App;
