import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import HowItHelps from './components/HowItHelps/HowItHelps'
import Uses from './components/Uses/Uses'

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <HowItHelps/>
      <Uses/>
    </main>
  )
}

export default App