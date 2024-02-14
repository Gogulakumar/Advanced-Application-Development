// Navbar.jsx

import React from 'react';
import '../Styles/Navbar.css'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      
    <nav className="navbar">
      <h1 className="navbar-heading" style={{color:'#fdff72f9'}}>QuantumQuest</h1>
      <ul>
       
        <Link to='/home'><li><button>Home</button></li></Link>
        <Link to='/courses'><li><button>Courses</button></li></Link>
        {/* <li><button>Enquiry</button></li> */}
       <Link to='/AdminView'><li><button>Enquiry</button></li></Link>
        <li><button>About</button></li>
        
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
