import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Login from './Login';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import MainCss from './Main.css';

const Main = () => {
    const navigate=new useNavigate();
    const handleback=() => {
        navigate('/Login')
    }
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="navbar-logo">logo</a>
          <button className="navbar-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className="navbar-menu">
            <li><a href="">Home</a></li>
            <li><a href="">about us</a></li>
            <li><a href="">serives</a></li>
            <li><a href="">blog</a></li>
            <li><a href="">contact</a></li>
          </ul>
        </div>
      </nav>
      <button onClick={handleback}>
         <IoArrowBackCircleOutline className="back-arrow-btn"/>
      </button>
      <div>

      </div>
    </div>
  )
}

export default Main
