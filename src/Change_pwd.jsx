import React from 'react'
import './Forgot_pwd.css'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import './Forgot_pwd.css'
import { useNavigate } from 'react-router-dom';
import Email_verify from './Email_verify';

import { RiLockPasswordFill } from "react-icons/ri";

const Change_pwd = () => {
    const navigate = new useNavigate();
        const handleBack = () => {
            navigate('/Email_verify')
        }
        const handleNext = () => {
                navigate('/')
        }
  return (
    <div>
        <div className="pwd-email">
            <div className="enter-email">
                <button className='back-btn' onClick={handleBack}>
                    <IoArrowBackCircleOutline className="back-arrow-btn"/>
                </button>
                
                <p>
                    Change Password
                </p>
            </div>
            
            <div className="para-forgot">
                <p>
                    Please enter a Strond Password.
                </p>
            </div>
            <div className="input-forgot">
                <div className="wrap-pwd">
                    <p className="para-pwd">
                        Enter New Password
                    </p>
                    <input type="password" placeholder='123456' />
                    <RiLockPasswordFill className="lock-icon" />
                </div>
                <div className="wrap-pwd">
                    <p className="para-pwd">
                        Confirm Password
                    </p>
                    <input type="password" placeholder='123456' />
                    <RiLockPasswordFill className="lock-icon"/>
                </div>
                
                
            </div>
            <div className="btn-forgot">
                <button onClick={handleNext}>
                    Change Password
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Change_pwd
