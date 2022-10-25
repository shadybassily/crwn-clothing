import React from "react";
import { Link } from "react-router-dom";
import "./email-not-verified.styles.css";
import { verifyEmail } from "../../config/firebase";
import { useSelector } from "react-redux";
export default function EmailNotVerified() {
  const currentUser = useSelector(state => state.user.currentUser)
  console.log(currentUser)
  if (currentUser?.emailVerified === false) {
    return (
      <div className="parent-container not-verified">
        Email Not Verified. <Link onClick={()=>verifyEmail(currentUser)} to="/verify">Verify</Link>
      </div>
    );
  }
  return <></>;
}
