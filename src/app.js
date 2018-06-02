import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
 

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js"; 
import "popper.js/dist/popper.min.js"; 
import "bootstrap/dist/js/bootstrap.min.js";
 

import 'normalize.css/normalize.css'; 
import "./styles/styles.scss"; 

ReactDOM.render(<AppRouter/>,document.querySelector("#app"));