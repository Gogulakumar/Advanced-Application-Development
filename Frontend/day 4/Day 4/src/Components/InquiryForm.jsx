// MaterialUIForm.jsx
// InquiryForm.jsx

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import '../Styles/InquiryForm.css';
import Navbar from './Navbar';


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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission (e.g., sending an email, storing in a database).
    // For simplicity, we'll log the values to the console in this example.
    console.log('Form Data:', formData);
};

  return (
    <>
   <Navbar/>
    <Container maxWidth="sm">
      
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom>
          <h3 style={{color:'black'}}>Contact Us</h3>
        </Typography>
        <form className="inquiry-form" onSubmit={handleSubmit}>
        <TextField
  fullWidth
  label="Course ID"
  id="courseId"
  name="courseId"
  variant="outlined"
  margin="normal"
  defaultValue={1}
  onChange={handleChange}
  InputProps={{
    readOnly:true,
  }}
  required
  className="input-field"
/>

<TextField
  fullWidth
  label="Course"
  id="course"
  name="course"
  variant="outlined"
  margin="normal"
  defaultValue={'Photography'}
  onChange={handleChange}
  InputProps={{
    readOnly:true,
  }}
  required
  className="input-field"
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
            className="input-field"
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
            className="input-field"
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
            className="input-field"
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
            className="input-field"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: '20px' }}
            className="submit-button"
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




























































































// InquiryForm.jsx

// import React, { useState } from 'react';
// import '../Styles/InquiryForm.css';
// import Navbar from './Navbar';

// // InquiryForm.jsx

// // ... (imports)

// const InquiryForm = () => {
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       message: '',
//     });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // Add logic to handle the form submission (e.g., sending an email, storing in a database).
//       // For simplicity, we'll log the values to the console in this example.
//       console.log('Form Data:', formData);
//     };
  
//     return (
//       <div>
//         <Navbar />
//         <p>
//           To enroll a course, we suggest you check all the available courses and
//           select the needed course. It redirects to the enrollment page; please
//           fill all the requirements, and in the Inquire box, you can ask your
//           inquiries
//         </p>
//         <div className="inquiry-form-container">
//           <h2>Contact Us</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
  
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
  
//             <div className="form-group">
//               <label htmlFor="message">Message:</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//             </div>
  
//             <button className="submit-button" type="submit">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default InquiryForm;
  