import React from "react";
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
import { cartToggle } from "../../store/slicers/cartSlice";
export default function Header() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const cartHidden = useSelector((state) => state.cart.hidden.payload);
  const dispatch = useDispatch();

  console.log(currentUser);

  const navigate = useNavigate();
  const handleLogOut = async () => {
    await signOut(auth);
    dispatch(cartToggle(true))
    navigate("/");
  };

  return (
    <nav className="parent-container">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <ul className="header-links">
        <li>
          <Link to="/shop" className="header-link hover-underline-animation">
            shop
          </Link>
        </li>
        <li>
          <Link to="/shop" className="header-link hover-underline-animation">
            contact
          </Link>
        </li>
        {currentUser ? (
          <>
            <li onClick={handleLogOut}>
              <Link className="header-link hover-underline-animation">
                sign out
              </Link>
            </li>
            <li
              onClick={() => {
                dispatch(cartToggle(!cartHidden));
              }}
            >
              <CartIcon />
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
      </ul>
      {(!cartHidden && currentUser) && <CartDropDown />}
    </nav>
  );
}
