import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
              <Route path='/' element={<Gallery />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/about' element={<About />}/>
            </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
