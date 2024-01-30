// Navbar.jsx

import React from 'react';
import '../Styles/Navbar.css'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-heading" style={{color:'#fdff72f9'}}>QuantumQuest</h1>
      <ul>
        <li><button>Home</button></li>
        <Link to='/courses'><li><button>Courses</button></li></Link>
        <li><button>Enquiry</button></li>
        <li><button>About</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
