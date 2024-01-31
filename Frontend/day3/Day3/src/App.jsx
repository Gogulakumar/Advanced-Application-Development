import LoginPage from "./Components/LoginPage"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Courses from "./Components/Courses"
import InquiryForm from "./Components/InquiryForm"
import Signup from "./Components/Signup"
import PaymentForm from "./Components/PaymentForm"
import AdminView from "./Components/AdminView"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/InquiryForm" element={<InquiryForm />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/pay" element={<PaymentForm/>} />
        <Route exact path="/AdminView" element={<AdminView/>} />
      </Routes>
    </Router>
  )
}

export default App;


// App.jsx


// import Courses from "./Components/Courses";

// const App = () => {
//   return (
//     <div>
//       {/* Your other components */}
//       <Courses />
//     </div>
//   );
// };

// export default App;

// App.js

// import Courses from './Components/Courses';

// function App() {
//   return (
//     <div className="App">
//       <Courses />
//     </div>
//   );
// }

// export default App;

