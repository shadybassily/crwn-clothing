import React from "react";
import "./confirm-msg.styles.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { verifyEmail } from "../../config/firebase";
import { useSelector
 } from "react-redux";
export default function ConfirmMsg() {
  const params = useParams()
  const {state:forgetPasswordEmail} = useLocation()
  const currentUser = useSelector(state => state.user.currentUser)
  const navigate = useNavigate()
  
  if(currentUser?.emailVerified === true){
    navigate('/', {replace:true})
  }
  if(params.opt === "verify-email")
  {
    return (
      <div className="confirmation-page">
        <div className="confirmation-message ">
          <p>a verification email has been sent to </p>
          <p className="user-email">{currentUser?.email}</p>
          <p>Check out your email and follow the link attached to verify your account.</p>
          <p><Link onClick={()=>verifyEmail(currentUser)}>resend email</Link></p>
          <small>ps: check spam and junk emails.</small>
        </div>
      </div>
  );
  }
  
  if(currentUser){
    navigate('/', {replace:true})
  } else if (params.opt === "forget-password") {
    return (
      <div className="confirmation-page">
        <div className="confirmation-message ">
          <p>an email has been sent to </p>
          <p className="user-email">{forgetPasswordEmail}</p>
          <p>Check out your email and follow the link attached to reset your password.</p>
          <p>after resetting your password, <Link to="/sign-in">sign in</Link> here</p>
          <small>ps: check spam and junk emails.</small>
        </div>
      </div>
  );
  }
  
}
