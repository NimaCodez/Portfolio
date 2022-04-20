import React from 'react';
import Navbar from './components/navbar';
import ContentCard from './components/contentcard';
import Hero from './components/hero';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {  
  
  const contents = [
    {
      Id: 1,
      header: 'Front-end, The Vision!',
      text: `One Of The Most Important Things In Each
      Website Is Front-end, The Thing Which Users See!
      It's Done! I'll use Html Css Js And React To Build it!`,
      imgPath: `${process.env.PUBLIC_URL}/FrontendMinified.png`,
    },
    {
      Id: 2,
      header: 'Back-end, The Barin!',
      text: `Done! How your website dares to break when
      you're using Node.js with Express.js for the
      brain?`,
      imgPath: `${process.env.PUBLIC_URL}/brainminified.png`,
    }
  ]
  Aos.init({
    startEvent: 'DOMContentLoaded',
    mirror: true,
    duration: 600,
    offset: 3
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {
        contents.map(content =>(
          <ContentCard key={content.Id} header={content.header} text={content.text} imgPath={content.imgPath} />
        ))
      }
    </div>
  );
}

export default App;
