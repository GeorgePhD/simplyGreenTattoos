
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
import Demos from './Components/Demos/Demos';
import HomeBtn from './Components/HomeBtn/HomeBtn';
import Map from './Components/Map/Map';
import Shop from './Components/Shop/Shop';
/* import HomeBtn from './Components/HomeBtn/HomeBtn'; */
/* import SocialMedia from './Components/SocialMedia/SocialMedia'; */
function App() {

  return (
    <>
    <BrowserRouter>
      <Banner />
      <HomeBtn />
      {/* <SocialMedia /> */}
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/Home' element={<HomeBtn />} /> */}
        <Route path='*' element={<Navigate to="/" />} />
        <Route path='/Designs' element={<Designs />} />
        <Route path='/Demos' element={<Demos />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/ImplementosDeTrabajo' element={<ImplementosDeTrabajo />} />
        <Route path='/Privacidad' element={<Privacidad />} />
        <Route path='/Consentimiento' element={<Consentimiento />} />
        <Route path='/Cookies' element={<Cookies />} />
      </Routes>
      <Map />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
