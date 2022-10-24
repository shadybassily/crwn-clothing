import React, { useContext } from "react";
import { appContext } from "../../App";

import "./header.styles.css";
import logo from "../../assets/images/crown.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//auth
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

export default function Header() {
  const {currentUser} = useContext(appContext)
  const navigate = useNavigate()
  const handleLogOut = async()=>{
    await signOut(auth)
    navigate('/')
  }

  return (
    <nav className="parent-container">
      <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
      <ul className="header-links">
        <li><Link to='/shop' className="header-link hover-underline-animation">shop</Link></li>
        <li><Link to='/shop' className="header-link hover-underline-animation">contact</Link></li>
        {
          currentUser ?
          <li onClick={handleLogOut}><Link className="header-link hover-underline-animation">sign out</Link></li>
          :
          <li><Link to='/sign-in' className="header-link hover-underline-animation">sign in</Link></li>
        }
      </ul>
    </nav>
  );
}
