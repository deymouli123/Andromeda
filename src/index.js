import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import { Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import reportWebVitals from './reportWebVitals'; 

// const routing = (
//   <Router>
//     <div>
//       <Header />
//       <hr />
//       <Routes>
//         {/* <Route exact path="/" component={App} /> */}
//         <Route exact path="/home" component={Home} />
//         {/* <Route path="/contact" component={Contact} />
//         <Route component={Notfound} /> */}
//       </Routes>
//       <Footer />
//     </div>
//   </Router>
// );


// ReactDOM.render(routing,
//   document.getElementById('root')
// );


ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <App />
      {/* <HomeBar/> */}
    {/* </BrowserRouter> */}
    {/* <Login/> */}
    {/* <Provider store={store}>
      <Login/>
    </Provider> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
