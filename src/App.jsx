import { useState } from 'react'
import About from './components/About'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Blogs/>
      <Contact/>

    </div>
  )
}

export default App
