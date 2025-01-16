import React from 'react'
// import './Forgot_pwd.css'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Enter_email from './Enter_email';
import './Enter_email.css'
import Change_pwd from './Change_pwd';


const Email_verify = () => {
  const navigate = new useNavigate();
        const handleBack = () => {
            navigate('/Enter_email')
        }
        const handleNext = () => {
          navigate('/Change_pwd')
      }
  return (
    <div>
        <div className="pwd-email">
              <div className="enter-email">
                  <button className='back-btn' onClick={handleBack}>
                      <IoArrowBackCircleOutline className="back-arrow-btn"/>
                  </button>
                  
                  <p>
                      Verify Your Email
                  </p>
              </div>
              <div className="img-forgot">
                  <img src="https://img.freepik.com/premium-vector/otp-authentication-secure-verification-never-share-otp-bank-details-concept_70921-2084.jpg?w=360" alt="" />
  
              </div>
              <div className="para-forgot">
                  <p>
                      Please enter your Email Address To Recieve a verification Code.
                  </p>
              </div>
              <div className="input-forgot-code">
                  
                  <input type="text" placeholder='' />
                  <input type="text" placeholder='' />
                  <input type="text" placeholder='' />
                  <input type="text" placeholder='' />
              </div>
              <div className="resend-code">
                <a href="#">
                  Resend Code?
                </a>
              </div>
              <div className="btn-forgot">
                  <button onClick={handleNext}>
                      Verify
                  </button>
              </div>
          </div>
    </div>
  )
}

export default Email_verify
