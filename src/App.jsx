
import './App.css'
import Designs from './Components/Designs/Designs'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import { BrowserRouter,  Routes, Route, Navigate } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Logo from './Components/Logo/Logo';
function App() {

  return (
    <>
    <BrowserRouter>
      <Banner />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to="/" />} />
        <Route path='/Designs' element={<Designs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
