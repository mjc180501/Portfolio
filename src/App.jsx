import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import About from './pages/About';
import Academics from './pages/Academics';
import './index.css'

function App(){
    return (
        <Router>
            <Navbar />
            < div className="content">
                <Routes>
                    <Route path='/' element = {<Home />} />
                    <Route path='/about' element = {<About />} />
                    <Route path='/projects' element = {<Projects />} />
                    <Route path='/experience' element = {<Experience />} />
                    <Route path='/academics' element = {<Academics />} />
                    <Route path='/contact' element = {<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;