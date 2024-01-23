// App.jsx

// import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
// import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //   <Route path="/" exact component={LoginPage} />
    //   <Route path="/home" exact component={HomePage} />
    //   </Routes>
    // </Router>
    <div><HomePage></HomePage></div>
  );
};

export default App;
