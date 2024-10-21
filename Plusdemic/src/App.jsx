import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import HowItHelps from './components/HowItHelps/HowItHelps'
import Uses from './components/Uses/Uses'
import Trust from './components/Trust/Trust'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <HowItHelps/>
      <Uses/>
      <Trust/>
      <Footer/>
    </main>
  )
}

export default App