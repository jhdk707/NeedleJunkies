import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import ReactDOM  from 'react';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="">
            <HashRouter>
                
                <Navigation />
                
                <Routes>
                    
                    <Route path='/project' element={<Project/>}/>
                    <Route path='/' element={<Header/>}/>
                    <Route path='/aboutme' element={<AboutMe/>}/>
                    <Route path='/resume' element={<Resume/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/footer' element={<Footer/>}/>
                </Routes>
                <Footer/>
            </HashRouter>


        </div>
    );
}

export default App;
