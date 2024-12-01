
import './App.css'
import Designs from './Components/Designs/Designs'
import Home from './Components/Home/Home'
import { BrowserRouter,  Routes, Route, Navigate } from 'react-router-dom';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to="/" />} />
        <Route path='/Designs' element={<Designs />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
