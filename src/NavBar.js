import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function NavBar({setCurrentPage}){
 return(
 <nav className="navbar">
 
 <ul>

    <li><button onClick={()=> setCurrentPage('Home')}>Home</button></li>
    <li><button onClick={()=> setCurrentPage('About')}>About</button></li> 
    <li><button onClick={()=> setCurrentPage('Contact')}>Contact Us</button></li> 
 
 </ul> 
 </nav>
 )
}

export default NavBar;