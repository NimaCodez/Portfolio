import React from 'react';
import Navbar from './components/navbar';
import ContentCard from './components/contentcard';
import Hero from './components/hero';
import 'aos/dist/aos.css';
import Aos from 'aos';
import WhyWebsite from './components/whyWebsite';
import Card from './components/exampleCard';

function App() {

  Aos.init({
    startEvent: 'DOMContentLoaded',
    mirror: false,
    duration: 600,
    offset: 10
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ContentCard />
      <WhyWebsite />
      <Card />
    </div>
  );
}

export default App;
