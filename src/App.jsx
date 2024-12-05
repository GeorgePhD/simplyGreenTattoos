
import './App.css'
import Designs from './Components/Designs/Designs'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import { BrowserRouter,  Routes, Route, Navigate } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Logo from './Components/Logo/Logo';
import ImplementosDeTrabajo from './Components/ImplementosDeTrabajo/ImplementosDeTrabajo';
import Cookies from './Components/Cookies/Cookies';
import Privacidad from './Components/Privacidad/Privacidad'
import Consentimiento from './Components/Consentimiento/Consentimiento';
/* import SocialMedia from './Components/SocialMedia/SocialMedia'; */
function App() {

  return (
    <>
    <BrowserRouter>
      <Banner />
      {/* <SocialMedia /> */}
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to="/" />} />
        <Route path='/Designs' element={<Designs />} />
        <Route path='/ImplementosDeTrabajo' element={<ImplementosDeTrabajo />} />
        <Route path='/Privacidad' element={<Privacidad />} />
        <Route path='/Consentimiento' element={<Consentimiento />} />
        <Route path='/Cookies' element={<Cookies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
