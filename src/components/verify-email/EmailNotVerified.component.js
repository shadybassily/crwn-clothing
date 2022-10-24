import React, { useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../../App";
import "./email-not-verified.styles.css";
import { verifyEmail } from "../../config/firebase";
export default function EmailNotVerified() {
  const { currentUser } = useContext(appContext);
  useEffect(()=>{
    console.log(currentUser?.emailVerified)
  },[])
  if (currentUser?.emailVerified === false) {
    return (
      <div className="parent-container not-verified">
        Email Not Verified. <Link onClick={()=>verifyEmail(currentUser)} to="/verify">Verify</Link>
      </div>
    );
  }
  return <></>;
}
