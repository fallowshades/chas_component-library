import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Menu, Hero, About, AboutUs, CatGrid } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Menu />

      <Hero />
      <About />
      <CatGrid />
      <AboutUs />
    </div>
  )
}

export default App
