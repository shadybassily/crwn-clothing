import React, { useContext } from "react";
import "./verify-emial.styles.css";
import {appContext} from '../../App'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { verifyEmail } from "../../config/firebase";
export default function VerifyEmail() {
  const {currentUser} = useContext(appContext)
  const navigate = useNavigate()
  console.log(currentUser)
  if(currentUser?.emailVerified === true){
    return <Navigate to='/' replace/>
  }
  return (
    <div className="verification-page">
      <div className="verification-message ">
        <p>a verification email has been sent to </p>
        <p className="user-email">{currentUser?.email}</p>
        <p>Check out your email and follow the link attached to verify your account.</p>
        <p><Link onClick={()=>verifyEmail(currentUser)}>resend email</Link></p>
        <small>ps: check spam and junk emails.</small>
      </div>
    </div>
  );
}
