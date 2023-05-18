// import "bootstrap/dist/css/bootstrap.min.css";
// //import './App.css'
// // import ReactDOM  from 'react';
// import Donations from "./components/Donations";
// import Friends from "./components/Friends";
// import Quickadd from "./components/Quickadd";
// import Mycollection from "./components/Mycollection";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Home from "./components/Home";
// import Navigation from "./components/Navigation";
// //import Project from './components/Project';
// import { HashRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="">
//       <HashRouter>
//         <Navigation />

//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/mycollection" element={<Mycollection />} />
//           <Route path="/quickadd" element={<Quickadd />} />
//           <Route path="/friends" element={<Friends />} />
//           <Route path="/donations" element={<Donations />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </HashRouter>

//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
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

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    setTimeout(() => {
      setIsLoading(false);
      setShowLoginModal(true);
    }, 2000);
  }, []);

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="">
      <HashRouter>
        <Navigation />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mycollection" element={<Mycollection />} />
          <Route path="/quickadd" element={<Quickadd />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          showLoginModal && <Login onClose={handleLoginModalClose} />
        )}
      </HashRouter>
    </div>
  );
}

export default App;
