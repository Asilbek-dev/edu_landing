import React from 'react';
import {render} from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router} from "react-router-dom";
import './FA/css/all.min.css'
import 'antd/dist/antd.css';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

