// HomePage.jsx

// import { Link } from 'react-router-dom';

// HomePage.js


// HomePage.js


import './../Styles/HomePage.css';

const HomePage = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar-heading">ENQUIRY</h1>
        <ul>
          <li><button>Home</button></li>
          <li><button>Courses</button></li>
          <li><button>Enquiry</button></li>
          <li><button>About</button></li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
      <div className="home-container">
        <h2>Welcome to the Student Course Enrollment App!</h2>
        
      </div>
    </div>
  );
};

export default HomePage;



{/* Add more content as needed */}
{/* <Link to="/login" className="home-link">Go to Login</Link> */}