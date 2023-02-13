import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <section className="gallery">
        
      </section>
      <Footer/>
    </div>
  )
}

export default App
