import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import './Forgot_pwd.css'
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import { MdEmail } from "react-icons/md";
import Email_verify from './Email_verify';


const Enter_email = () => {
    const navigate = new useNavigate();
        const handleBack = () => {
            navigate('/Login')
        }
        const handleNext = () => {
             navigate('/Email_verify')
        }
  return (
    <div>
        <div className="pwd-email">
            <div className="enter-email">
                <button className='back-btn' onClick={handleBack}>
                    <IoArrowBackCircleOutline className="back-arrow-btn"/>
                </button>
                
                <p>
                    Forgot Password
                </p>
            </div>
            <div className="img-forgot">
                <img src="https://i.pinimg.com/736x/5a/f2/8a/5af28ad0a4feee85bb9038e64ee2455f.jpg" alt="" />

            </div>
            <div className="para-forgot">
                <p>
                    Please enter your Email Address To Recieve a verification Code.
                </p>
            </div>
            <div className="input-forgot">
                <input type="email" placeholder='Email Address' />
                <MdEmail  className="email-logo"/>
            </div>
            <div className="btn-forgot">
                <button onClick={handleNext}>
                    Send
                </button>
            </div>
            
        </div>
      
    </div>
  )
}

export default Enter_email
