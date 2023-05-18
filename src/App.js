import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'
// import ReactDOM  from 'react';
import Profile from './components/Profile'
import Myaccount from './components/Myaccount'
import Donations from './components/Donations'
import Friends from './components/Friends';
import Quickadd from './components/Quickadd';
import Mycollection from './components/Mycollection';
import Signup from './components/Signup';
import Home from './components/Home';
import Navigation from './components/Navigation';
//import Project from './components/Project';
import { HashRouter, Routes, Route } from 'react-router-dom'


function App() {
    return (
        <div className="">
            <HashRouter>
                
                <Navigation />
                
                <Routes>
                    
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/' element={<Signup/>}/>
                    <Route path='/mycollection' element={<Mycollection/>}/>
                    <Route path='/quickadd' element={<Quickadd/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                    <Route path='/donations' element={<Donations/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/myaccount' element={<Myaccount/>}/>
                </Routes>
                
            </HashRouter>


        </div>
    );
}

export default App;
