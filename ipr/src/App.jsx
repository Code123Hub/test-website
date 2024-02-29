

import React, { useState } from "react";
import Login1 from "./Components/Login/Login1.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Verification from "./Components/Verfication.jsx";
// import CheckValid from "./Components/CheckValid.jsx";
import ResetPassword from "./Components/ForgotPassword/ResetPassword.jsx";
import VerifyOTP from "./Components/ForgotPassword/VerifyOTP.jsx";
// import { AuthProvider } from './Components/AuthContext/Auth.jsx';

import LandingPage from "./Components/LandingPage";
import { Navigation } from "./Components/Navigation.jsx";
// import Login from './Components/Login/Login';

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// })

const App = () => {
  // const [landingPageData, setLandingPageData] = useState({})
  // useEffect(() => {
  //   setLandingPageData(JsonData)
  // }, [])
 

  return (
    <>
      {/* <Navigation /> */}
     
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login1 />} />

          <Route exact path="/signup" element={<SignUp />} />

          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
            <Route exact path="/reset-password" element={<ResetPassword />} />
            <Route path="/otp-verification/:userId" element={<VerifyOTP />} />

            {/* <Route path="/verification" element={<Verification />} />
            <Route path="/checkValid/:token" element={<CheckValid />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
