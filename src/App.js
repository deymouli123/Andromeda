import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import OurTeams from './components/OurTeams';
import OurServices from './components/OurServices';
import Testimonials from './components/Testimonials';

// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          <hr />
          {/* <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/about">About Us</Link>
            </li> */}
            {/* <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul> */} 
          <Routes>
            <Route exact path='/' element={ <Home />} />
            <Route exact path='/service' element={<OurServices  />}/>
            <Route  path='/ourteams' element={<OurTeams /> } />
            <Route  path='/testimonials' element={<Testimonials /> } />
            <Route  path='/contactus' element={<ContactUs /> } />
            <Route component={Error}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;


// // import logo from './logo.svg';
// // import './App.css';
// import React from 'react';
// // import Header from './components/Header';
// // import Footer from './components/Footer';
// // import Home from './components/Home';

// function App() {
//   return (
  //     <div className="App">
//       {/* <Header /> */}
//       {/* <Home/> */}
//     </div>
//   );
// }
// export default App;