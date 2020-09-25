import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import ReactApp from './App';
import * as serviceWorker from './serviceWorker';
/*import { BrowserRouter as Router, Route } from "react-router-dom";

} */
ReactDOM.render(
/*   <Router>
    <Route path="/App1.js" component={User} />
  </Router>, */
  
    <ReactApp />
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
