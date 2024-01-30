import React from 'react';
import './../Styles/Home.css';
import Navbar from './Navbar';

const HomePageWithoutNavBar = () => {
  return (
    <div>
        <Navbar/>
      <div className="home-container">
        <div className="image-content">
          <img src="https://academicadvising-stamford.media.uconn.edu/wp-content/uploads/sites/1164/2023/10/Course-Registration-1.png" alt="Description" />
        </div>
        
        <div className="text-content">
          <h2>How to enroll?</h2>
          <p>To enroll a course, we suggest you check all the available courses and select the needed course. It redirects to the enrollment page; please fill all the requirements, and in the Inquire box, you can ask your inquiries</p>
        </div>

        <div className="grid-container">
          {/* Grid Item 1 */}
          <div className="grid-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyA7OWu4AhnSTeY5WXfMNXTXDHK3QI-fRwwA&usqp=CAU" alt="Image 1" />
            <h3>Business Management</h3>
            <p>Businness management course can help out vision of business and how to handle them.</p>
          </div>

          {/* Grid Item 2 */}
          <div className="grid-item">
            <img src="data:image/png;base64,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" alt="Image 2" />
            <h3>Kotlin</h3>
            <p>This Kotlin course can make you understand the basics of Kotlin.</p>
          </div>

          {/* Grid Item 3 */}
          <div className="grid-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGy0f43mKQbwCGvPLM_PNs4TbHgOTEUqzgg&usqp=CAU" alt="Image 3" />
            <h3>Photography</h3>
            <p>This course helps to learn the basic concepts of Photography.</p>
          </div>

          {/* Grid Item 4 */}
          <div className="grid-item">
            <img src="https://vaibhavk.com/wp-content/uploads/2022/11/CREATIVE-WRITING-COURSES-IN-INDIA-800x445.png" alt="Image 4" />
            <h3>ScreenWriting</h3>
            <p>This course helps to learn the basic concepts of Photography.</p>
          </div>

          {/* Grid Item 5 */}
          <div className="grid-item">
            <img src="https://nearlearn.com/public/images/ai-training-in-bangalore.jpeg" alt="Image 5" />
            <h3>Artificial Intelligence</h3>
            <p>This course helps to learn the basic concepts of Photography.</p>
          </div>

          {/* Grid Item 6 */}
          <div className="grid-item">
            <img src="https://www.freecodecamp.org/news/content/images/2022/02/Banner-10.png" alt="Image 6" />
            <h3>Python</h3>
            <p>This course helps to learn the basic concepts of Photography.</p>
          </div>
          </div>
      </div>
      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <span> | </span>
          <a href="/policy">Privacy Policy</a>

          {/* Social Media Icons */}
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/128/1409/1409943.png" alt="Facebook" /></a>
          <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" alt="Twitter" /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" alt="Instagram" /></a>
          {/* Add more social media icons as needed */}
        </div>
      </footer>
    </div>
  );
};

export default HomePageWithoutNavBar;
