// AdminView.jsx

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import Navbar from './Navbar';

const AdminView = () => {
  const [admissionData, setAdmissionData] = useState([]);

  // Dummy data for demonstration
  const dummyData = [
    {
      courseId: 'C001',
      courseName: 'Computer Science',
      name: 'John Doe',
      gender: 'Male',
      nationality: 'US',
      contactNumber: '1234567890',
      qualification: 'Bachelor',
      yearOfPassing: '2022',
      collegeName: 'ABC College',
      paymentMethod: 'Card',
    },
    // Add more dummy data as needed
  ];

  // Use useEffect to fetch data from your backend
  // useEffect(() => {
  //   fetchDataFromBackend(); // Implement a function to fetch data from your backend
  // }, []);

  // Use the fetched data to update the state
  // const fetchDataFromBackend = async () => {
  //   const data = await fetchYourData(); // Implement a function to fetch data from your backend
  //   setAdmissionData(data);
  // };

  return (
    <>
      <Navbar />
      <TableContainer component={Paper}>
            <h2 style={{color:'black'}}>Inquiry Details</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course ID</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Nationality</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Qualification</TableCell>
              <TableCell>Year of Passing</TableCell>
              <TableCell>College Name</TableCell>
              <TableCell>Payment Method</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((data, index) => (
                <TableRow key={index}>
                <TableCell>{data.courseId}</TableCell>
                <TableCell>{data.courseName}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.gender}</TableCell>
                <TableCell>{data.nationality}</TableCell>
                <TableCell>{data.contactNumber}</TableCell>
                <TableCell>{data.qualification}</TableCell>
                <TableCell>{data.yearOfPassing}</TableCell>
                <TableCell>{data.collegeName}</TableCell>
                <TableCell>{data.paymentMethod}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
            <p>To enroll a course, we suggest you check all the available courses and select the needed course. It redirects to the enrollment page; please fill all the requirements, and in the Inquire box, you can ask your inquiries</p>
    </>
  );
};

export default AdminView;
