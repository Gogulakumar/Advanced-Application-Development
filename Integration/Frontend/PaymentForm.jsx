import { useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Container,
  Grid,
} from '@mui/material';
import Navbar from './Navbar';
import axios from 'axios';

const PaymentForm = () => {
  const [admissionDetails, setAdmissionDetails] = useState({
    courseId: '',
    courseName: '',
    adminName: '', // Changed from name to adminName
    gender: '',
    nationality: '',
    contactNumber: '',
    qualification: '',
    yearOfPassing: '',
    collegeName: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmissionDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
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
        'http://localhost:8080/admin/inquiries/add',
        admissionDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log('Admission Details submitted successfully:', response.data);
      // Optionally, you can reset the form fields here
      setAdmissionDetails({
        courseId: '',
        courseName: '',
        adminName: '', // Changed from name to adminName
        gender: '',
        nationality: '',
        contactNumber: '',
        qualification: '',
        yearOfPassing: '',
        collegeName: '',
        paymentMethod: '',
      });
    } catch (error) {
      console.error('Error submitting admission details:', error);
    }
  };

  return (
    <>
      <Navbar />
      <p>
        To enroll a course, we suggest you check all the available courses and
        select the needed course. It redirects to the enrollment page; please
        fill all the requirements, and in the Inquire box, you can ask your
        inquiries
      </p>
      <Container maxWidth="md">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Course ID"
                name="courseId"
                fullWidth
                value={admissionDetails.courseId}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Course Name"
                name="courseName"
                fullWidth
                value={admissionDetails.courseName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Admin Name" // Changed label to Admin Name
                name="adminName" // Changed name to adminName
                fullWidth
                value={admissionDetails.adminName} // Changed value to admissionDetails.adminName
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={admissionDetails.gender}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Nationality"
                name="nationality"
                fullWidth
                value={admissionDetails.nationality}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Contact Number"
                name="contactNumber"
                fullWidth
                value={admissionDetails.contactNumber}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Qualification"
                name="qualification"
                fullWidth
                value={admissionDetails.qualification}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Year of Passing"
                name="yearOfPassing"
                fullWidth
                value={admissionDetails.yearOfPassing}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="College Name"
                name="collegeName"
                fullWidth
                value={admissionDetails.collegeName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Payment Method</InputLabel>
                <Select
                  name="paymentMethod"
                  value={admissionDetails.paymentMethod}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="card">Card</MenuItem>
                  <MenuItem value="upi">UPI</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default PaymentForm;
