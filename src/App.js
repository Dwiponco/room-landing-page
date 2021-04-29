import React from 'react'
import About from './components/About'
import Feature from './components/Feature'
import Header from './components/Header'
import "./index.css"
import AboutImage from "./images/Frame 19.png"
import AboutImage2 from "./images/download.png"
// import PresentationImage from "./images/presentation.png"
import Presentation from './components/Presentation'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={AboutImage} title="Come with All You Need for Daily Life " button ="Get The App"/>
      <Presentation/>
      <About image={AboutImage2} title="Download and Get The App Now " button ="Download"/>
      <Contact/>
    </div>
  );
}

export default App;
