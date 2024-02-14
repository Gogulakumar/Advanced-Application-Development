// MaterialUIForm.jsx
// InquiryForm.jsx

import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import '../Styles/InquiryForm.css';
import Navbar from './Navbar';
import axios from 'axios'; // Import Axios

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    course: '',
    courseId: '',
    enquiryType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('JWT token not found.');
        return;
      }

      const response = await axios.post(
        'http://localhost:8080/inquiries/add',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log('Inquiry submitted successfully:', response.data);
      // Optionally, you can reset the form fields here
      setFormData({
        name: '',
        email: '',
        message: '',
        course: '',
        courseId: '',
        enquiryType: '',
      });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    }
  };

  return (
    <>
      <Navbar />
      <p>To enroll a course, we suggest you check all the available courses and select the needed course. It redirects to the enrollment page; please fill all the requirements, and in the Inquire box, you can ask your inquiries</p>
      <Container maxWidth="sm">
        <Box mt={4}>
          <Typography variant="h4" align="center" gutterBottom>
            <h3 style={{ color: 'black' }}>Contact Us</h3>
          </Typography>
          <form className="inquiry-form1" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Course ID"
              id="courseId"
              name="courseId"
              variant="outlined"
              margin="normal"
              value={formData.courseId}
              onChange={handleChange}
              
              className="input-field1"
            />

            <TextField
              fullWidth
              label="Course"
              id="course"
              name="course"
              variant="outlined"
              margin="normal"
              value={formData.course}
              onChange={handleChange}
              
              required
              className="input-field1"
            />
          <TextField
            fullWidth
            label="Name"
            id="name"
            name="name"
            variant="outlined"
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field1"
          />
          <TextField
            fullWidth
            label="Email"
            id="email"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field1"
          />
          <TextField
            fullWidth
            label="Enquiry Type"
            id="enquiryType"
            name="enquiryType"
            variant="outlined"
            margin="normal"
            value={formData.enquiryType}
            onChange={handleChange}
            required
            className="input-field1"
          />
          <TextField
            fullWidth
            label="Message"
            id="message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            value={formData.message}
            onChange={handleChange}
            required
            className="input-field1"
          />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginTop: '20px' }}
              className="submit-button1"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default InquiryForm;
