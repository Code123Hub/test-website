

import React, { useEffect, useState }  from "react";
import { Navigation } from './Navigation'
import { Header } from './header'
import { Features } from './features'
import { About } from './About'
import { Services } from './services'
import { Gallery } from './gallery'
import { Testimonials } from './testimonials'
import {Contact} from './Contact'
import JsonData from '../data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  })
function LandingPage() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
     
    </div>
  );
}

export default LandingPage;
