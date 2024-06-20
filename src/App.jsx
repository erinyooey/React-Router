import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'

function App() {


  return (
    <>
        <div id="container">

          <div id="navbar">
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
            <Link to="/">Home</Link>
          </div>

          <div id="main-section">
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/blue' element={<Blue />}></Route>
              <Route path='/red' element={<Red />}></Route>
            </Routes>
          </div>
      </div>
    </>
  )
}

export default App
