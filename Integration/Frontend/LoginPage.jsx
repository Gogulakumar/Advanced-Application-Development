// LoginPage.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './../Styles/LoginPage.css';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'

const LoginPage = () => {
  const navigate = useNavigate();
  const [, setLoginError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const isValidCredentials = await checkCredentials(username, password);

      if (isValidCredentials) {
        // Redirect to home page if credentials are valid
        // Use the navigate function to navigate to the specified route
        navigate('/Home');
      } else {
        // Set loginError to true if credentials are not valid
        setLoginError(true);
      }
    } catch (error) {
      console.error('Axios error:', error.message);
      setLoginError(true);
    }
  };

  const checkCredentials = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8080/authenticate', {
        username: username,
        password: password,
      });
  
      if (response.status === 200) {
        // Access token from response data
        const token = response.data.jwtToken;
        console.log("Token: ", token);
        localStorage.setItem('token', response.data.jwtToken);
        return true;
      } else {
        // Credentials are invalid
        return false;
      }
    } catch (error) {
      // Handle error (e.g., network error)
      throw new Error(error.message);
    }
  };
  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   const validationErrors = {};
  //   if (!username.trim()) {
  //     validationErrors.username = 'Username is required';
  //   }
  //   if (!password.trim()) {
  //     validationErrors.password = 'Password is required';
  //   }

  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }

  //   console.log('Logging in with:', { username, password });
  //   // Perform login logic here

  //   // Redirect to the home page
  // };

  return (
    <div>
    <div style={{marginRight:'50px'}}>
    <div className='base with-background'>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* {errors.username && <div className="error">{errors.username}</div>} */}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* {errors.password && <div className="error">{errors.password}</div>} */}
          </div>
         <button type="submit">Login</button>
        </form>
        <p>
          Do not have an account? <Link to='/Signup'>Signup</Link>
        </p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default LoginPage;