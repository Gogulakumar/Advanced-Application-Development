import React from 'react';
import Navbar from './Navbar';
import '../Styles/Courses.css';
import '../Styles/HomePage.css';
import {Link} from 'react-router-dom';

const CourseCard = () => {
  const courses = [
    
    {
      title: 'Photography',
      description: 'Photography courses provide individuals with a structured and comprehensive learning experience to enhance their skills and understanding of the art and technical aspects of photography. These courses cater to a wide range of skill levels, from beginners to advanced practitioners.',
      price: 'Rs.2000 Only',
      imageUrl: 'https://img.freepik.com/free-photo/vibrant-s-curves-lens-generated-by-ai_24640-82071.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1698883200&semt=ais', // Replace with the actual image path
    },
    
    {
      title: 'Graphic Design',
      description: 'Graphic design courses are educational programs that equip individuals with the skills and knowledge necessary for a successful career in visual communication. These courses cover a broad spectrum of topics, blending artistic creativity with technical proficiency.',
      price: 'Rs.2000 Only',
      imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHw%3D&w=1000&q=80', // Replace with the actual image path
    },
    
    {
      title: 'Animation',
      description: 'Animation courses are designed to equip individuals with the skills and knowledge necessary to create captivating and dynamic visual content. These courses cover a broad spectrum of animation techniques and tools, catering to both beginners and those with some prior experience. ',
      price: 'Rs.2000 Only',
      imageUrl: 'https://variety.com/wp-content/uploads/2022/09/Pixar-Wall-E.jpg?w=1000&h=563&crop=1', // Replace with the actual image path
    },
    
    {
      title: 'Business Management',
      description: 'Business management courses are educational programs designed to equip individuals with the knowledge and skills needed to effectively oversee and lead organizations. These courses cover a wide range of topics related to managing people, resources, and operations in a business context.The goal is to prepare individuals for leadership roles in a dynamic and competitive business environment.',
      price: 'Rs.2000 Only',
      imageUrl: 'https://e0.pxfuel.com/wallpapers/108/103/desktop-wallpaper-business-management-business-strategy.jpg',
    },
    
    {
      title: 'Digital Marketing',
      description: 'Digital marketing courses are designed to provide individuals with a comprehensive understanding of the strategies and tools used in the rapidly evolving field of online marketing. These courses cover a diverse range of topics, empowering participants to navigate the digital landscape effectively.Digital marketing courses cater to a wide audience, including business professionals, entrepreneurs, and marketing enthusiasts, providing them with practical skills and knowledge to thrive in the digital age.',
      price: 'Rs.2000 Only',
      imageUrl: 'https://lntedutech.com/wp-content/uploads/2023/06/digital-marketing-scaled-1.jpg', // Replace with the actual image path
    },
  ];

  return (
    <div>
      <Navbar />

      {/* <p>
        To enroll in a course, we suggest you check all the available courses and select the needed course. 
        It redirects to the enrollment page;
         please fill all the requirements, and in the Inquire box, you can ask your inquiries.
      </p> */}

      {/* Render course cards dynamically */}
      {courses.map((course, index) => (
        <div key={index} className="course-card">
          <img className="course-image" src={course.imageUrl} alt={course.title} />
          <div className="course-details">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <p className="course-price">{course.price}</p>
            <div style={{display:'flex',justifyContent:'center'}}>
            <Link to="/PaymentForm"> <button className="enroll-button" > Enroll Now</button></Link>
           <Link to="/InquiryForm"> <button className="enroll-button1">Enquiry Now</button></Link>

            </div>
          </div>
        </div>
      ))}

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <span> | </span>
          <a href="/policy">Privacy Policy</a>

          {/* Social Media Icons */}
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/1409/1409943.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" alt="Instagram" />
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </footer>
    </div>
  );
};

export default CourseCard;
