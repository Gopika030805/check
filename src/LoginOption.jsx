import React from 'react'
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa"
import './LoginOption.css'
import Login from './Login.jsx'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';


const LoginOption = () => {
    const navigate = useNavigate();
    const handleNavigate =() => {
        navigate('/Login')
    }
  return (
    <div class="login-bg">
      <div className="login-option">
        <div>
            <h1>
                LOGIN
            </h1>
        </div>
        
        <div className="options">
            <div className="option-std-tch">
                <PiStudentFill className="icon"/>
                <button onClick={handleNavigate}>
                    <p>STUDENT</p>
                </button>
            </div>
            <div>
                <h1>OR</h1>
            </div>
            
            <div className="option-std-tch">
                <FaChalkboardTeacher className="icon"/>
                <button onClick={handleNavigate}>
                    <p>TEACHER</p>
                </button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default LoginOption
