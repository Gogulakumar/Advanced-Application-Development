import  { useState, useEffect } from 'react';
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
import axios from 'axios';

const AdminView = () => {
  const [adminInquiries, setAdminInquiries] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('JWT token not found.');
        return;
      }

      const response = await axios.get('http://localhost:8080/admin/inquiries/all', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setAdminInquiries(response.data);
    } catch (error) {
      console.error('Error fetching admin inquiries:', error);
    }
  };

  return (
    <>
      <Navbar />
      <TableContainer component={Paper}>
        <h2 style={{ color: 'black' }}>Admin Inquiries</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course ID</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell>Admin Name</TableCell>
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
            {adminInquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell>{inquiry.courseId}</TableCell>
                <TableCell>{inquiry.courseName}</TableCell>
                <TableCell>{inquiry.adminName}</TableCell>
                <TableCell>{inquiry.gender}</TableCell>
                <TableCell>{inquiry.nationality}</TableCell>
                <TableCell>{inquiry.contactNumber}</TableCell>
                <TableCell>{inquiry.qualification}</TableCell>
                <TableCell>{inquiry.yearOfPassing}</TableCell>
                <TableCell>{inquiry.collegeName}</TableCell>
                <TableCell>{inquiry.paymentMethod}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p>
        To enroll a course, we suggest you check all the available courses and
        select the needed course. It redirects to the enrollment page; please
        fill all the requirements, and in the Inquire box, you can ask your
        inquiries
      </p>
    </>
  );
};

export default AdminView;
