import React, { useEffect, useState } from "react";
import "./header.styles.css";
import logo from "../../assets/images/crown.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//Components
import CartIcon from "../cart/cart-icon/CartIcon.component";
import CartDropDown from "../cart/cart-dropd-down/CartDropDown.component";
//auth
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
//redux state
import { useSelector, useDispatch } from "react-redux";
import { cartToggle } from "../../store/slicers/cart/cartSlice";
import FindUs from "../find-us/FindUs.component";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const currentUser = useSelector((state) => state.user.currentUser);
  const cartHidden = useSelector((state) => state.cart.hidden);
  

  
  const handleLogOut = async () => {
    await signOut(auth);
    dispatch(cartToggle(true));
    navigate("/");
  };
  const [isHidden, setIsHidden] = useState(false);
  const hideLogoOnScroll = () => {
    if ((window.scrollY > 53) & (window.innerWidth < 800)) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", hideLogoOnScroll);
    return () => {
      window.removeEventListener("scroll", hideLogoOnScroll);
    };
  });
  return (
    <nav className={`${isHidden && "shrinked-nav"}`}>
     <div>
     <Link to="/" className={`logo ${isHidden && "hidden-logo"} `}>
        <img src={logo} alt="logo" className="logo-icon" />
      </Link>
     </div>
      <ul className={`header-links ${isHidden && "shrinked-header-links"}`}>
        <li>
          <Link to="/shop" className="header-link hover-underline-animation">
            shop
          </Link>
        </li>
        <li>
          <Link className="header-link hover-underline-animation find-us-link" >
            find us
            <FindUs />
          </Link>
          
          
        </li>
        {currentUser ? (
          <>
            <li onClick={handleLogOut}>
              <Link className="header-link hover-underline-animation">
                sign out
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link
              to="/sign-in"
              className="header-link hover-underline-animation"
            >
              sign in
            </Link>
          </li>
        )}
        <li
          onClick={() => {
            dispatch(cartToggle(!cartHidden));
          }}
        >
          <CartIcon />
        </li>
      </ul>
      {cartHidden === false && <CartDropDown />}
    </nav>
  );
}
