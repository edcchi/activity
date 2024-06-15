import React from 'react';
import './App.css';
import About from './About.js';
import Contact from './Contact.js';
import Home from './Home.js';
import { BrowserRouter, Route, Routes, Navigate, NavLink} from 'react-router-dom';


function NavBar({setCurrentPage}){
    return(

        <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element = {<Home />} />              
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/*" element={<Navigate to="/"/> }/>       
        </Routes>

      </BrowserRouter>

        
    )

}
export default NavBar;