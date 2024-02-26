

import { useState, useEffect } from 'react'
// import {  Route, Routes } from 'react-router-dom';

import { Navigation } from './Components/Navigation'
import { Header } from './Components/header'
import { Features } from './Components/features'
import { About } from './Components/About'
import { Services } from './Components/services'
import { Gallery } from './Components/gallery'
import { Testimonials } from './Components/testimonials'
import { Footer } from './Components/Footer/Footer'
import {Contact} from './Components/Contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
// import Login from './Components/Login/Login';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact}/>
      {/* <Footer/> */}
      
        {/* <Routes>
          <Route path="/login" element={<Login />}/>
        </Routes>
       */}

    </div>
  )
}

export default App