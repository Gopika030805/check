
import './App.css';
import Login from './Login.jsx'
import React, { useState } from 'react';
import LoginOption from './LoginOption.jsx';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Main from './Main.jsx';
import {CSSTransition , TansitionGroup} from "react-transition-group";
import Enter_email from './Enter_email.jsx';
import Email_verify from './Email_verify.jsx';
import Change_pwd from './Change_pwd.jsx';


function App() {


  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LoginOption />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Enter_email" element={<Enter_email />} />
        <Route path="/Email_verify" element={<Email_verify />} />
        <Route path="/Change_pwd" element={<Change_pwd />} />

      </Routes>
    </Router>
  )
}

export default App;
