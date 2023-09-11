import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.component'

function App() {

  return (
    <div>
      <BrowserRouter>
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
