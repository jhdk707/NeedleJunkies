import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Donations from "./components/Donations";
import Friends from "./components/Friends";
import Quickadd from "./components/Quickadd";
import Mycollection from "./components/Mycollection";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import SpotResults from "./components/SpotResults";
import DiscResults from "./components/DiscResults";

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
        <Navigation />

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mycollection" element={<Mycollection />} />
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

        {showSignupModal ? <Signup onClose={handleSignupModalClose} /> : null}
      </HashRouter>
    </div>
  );
}

export default App;
