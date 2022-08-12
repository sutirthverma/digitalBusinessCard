import React from 'react'
import './App.css'

import Info from '/components/info/Info';
import About from '/components/about/About';
import Interest from '/components/interest/Interest';
import Footer from '/components/footer/Footer';


function App() {

  return (
    <div className="App">
      <Info />
      <About />
      <Interest />
      <Footer />      
    </div>
  )
}

export default App
