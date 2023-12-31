import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.component'
import { Navbar } from './components/Navbar.component'
import './index.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
