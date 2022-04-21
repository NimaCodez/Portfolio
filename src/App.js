import React from 'react';
import Navbar from './components/navbar';
import ContentCard from './components/contentcard';
import Hero from './components/hero';
import 'aos/dist/aos.css';
import Aos from 'aos';
import WhyWebsite from './components/whyWebsite';
import Card from './components/exampleCard';
import Contact from './components/contact';

function App() {

  Aos.init({
    startEvent: 'DOMContentLoaded',
    mirror: false,
    duration: 600,
    offset: 10
  })

  const toggler = () => {
    const menu = document.querySelector('.mobile-nav');
    
    let classlist = menu.classList;
    if (classlist[1] === 'close') {
      classlist.replace('close', 'open');
    }
    
    else if (classlist[1] === 'open') {
      classlist.replace('open', 'close');
    }
    
    
  }

  return (
    <div className="App">
      <Navbar toggler={toggler} />
      <Hero />
      <ContentCard />
      <WhyWebsite />
      <Card />
      <Contact/>
    </div>
  );
}

export default App;
