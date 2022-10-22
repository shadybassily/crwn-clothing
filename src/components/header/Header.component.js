import React from "react";

import "./header.styles.css";
import logo from "../../assets/images/crown.svg";
import { Link } from "react-router-dom";

import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
export default function Header() {
  const [user] = useAuthState(auth)
  return (
    <nav className="parent-container">
      <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
      <ul className="header-links">
        <li><Link to='/shop' className="header-link hover-underline-animation">shop</Link></li>
        <li><Link to='/shop' className="header-link hover-underline-animation">contact</Link></li>
        <li><Link to='/sign-in' className="header-link hover-underline-animation">sign in</Link></li>
        {user&& <li onClick={()=>{signOut(auth)}}>logout</li>}
      </ul>
    </nav>
  );
}
