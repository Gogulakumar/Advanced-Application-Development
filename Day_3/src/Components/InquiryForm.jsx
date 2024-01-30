// InquiryForm.jsx

import React, { useState } from 'react';
import '../Styles/InquiryForm.css';
// import Navbar from './Navbar';

const InquiryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission (e.g., sending an email, storing in a database).
    // For simplicity, we'll log the values to the console in this example.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className="inquiry-form-container">
        {/* <Navbar/> */}
      <h2>Enquiry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Suggestion Box */}
      <div className="suggestion-box">
        <h3>Suggestions:</h3>
        <ul>
          <li>Provide a valid email address.</li>
          <li>Include a detailed message for better assistance.</li>
        </ul>
      </div>
    </div>
  );
};

export default InquiryForm;
