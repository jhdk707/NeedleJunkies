import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './components/Profile'
import Navigation from "./components/Navigation";
import Donations from "./components/footer/Donations";
import Friends from "./components/Friends";
import Quickadd from "./components/Quickadd";
import Mycollection from "./components/Mycollection";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/home/Home";
import Contact from './components/footer/Contact'
import Footer from './components/footer/Footer'
import { ThemeProvider } from "@emotion/react";
import Theme from './Theme'
// import Home from "./components/Home";
import SpotResults from "./components/SpotResults";
import DiscResults from "./components/DiscResults";
import decode from 'jwt-decode'

// import decode from 'jwt-decode';

// class AuthService {
//   getProfile() {
//     return decode(this.getToken());
//   }

//   loggedIn() {
//     const token = this.getToken();
//     // If there is a token and it's not expired, return `true`
//     return token && !this.isTokenExpired(token) ? true : false;
//   }

//   isTokenExpired(token) {
//     // Decode the token to get its expiration time that was set by the server
//     const decoded = decode(token);
//     // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
//     if (decoded.exp < Date.now() / 1000) {
//       localStorage.removeItem('id_token');
//       return true;
//     }
//     // If token hasn't passed its expiration time, return `false`
//     return false;
//   }

//   getToken() {
//     return localStorage.getItem('id_token');
//   }

//   login(idToken) {
//     localStorage.setItem('id_token', idToken);
//     window.location.assign('/');
//   }

//   logout() {
//     localStorage.removeItem('id_token');
//     window.location.reload();
//   }
// }

// export default new AuthService();







function App() {
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  const handleShowSignupModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleSignupModalClose = () => {
    setShowSignupModal(false);
  };

  return (
    <div className="">
      <HashRouter>
      <ThemeProvider theme={Theme}>
      <div
        style={{
          backgroundColor: Theme.palette.background.default,
          minHeight: '100vh', // Ensure the container covers the full viewport height
        }}
      >
        <Navigation />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mycollection" element={<Mycollection />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quickadd" element={<Quickadd />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/search/spot" element={<SpotResults />} />
          <Route path="/search/disc" element={<DiscResults />} />
          <Route
            path="/"
            element={
              showLoginModal ? (
                <Login
                  onClose={handleLoginModalClose}
                  onShowSignup={handleShowSignupModal}
                />
              ) : null
            }
          />
        </Routes>

        <Footer/>
        </div>
       </ThemeProvider>

        {showSignupModal ? <Signup onClose={handleSignupModalClose} /> : null}
      </HashRouter>
    </div>
  );
}

export default App;