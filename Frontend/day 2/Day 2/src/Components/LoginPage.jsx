// LoginPage.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './../Styles/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Logging in with:', { username, password });
    // Perform login logic here

    // Redirect to the home page
  };

  return (
    <div>
    <div style={{marginRight:'50px'}}>
    <div className='base with-background'>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <Link to='/Home'><button type="submit">Login</button></Link>
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