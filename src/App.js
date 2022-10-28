//styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
//components
import HomePage from "./pages/homepage/HomePage.component";
import Collection from "./pages/collection/Collection.component";
import Shop from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import SignIn from "./pages/signIn-page/SignIn.component";

//other imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./config/firebase";
import ConfirmMsg from "./pages/confirm-msg/ConfirmMsg.component.";
import EmailNotVerified from "./components/verify-email/EmailNotVerified.component";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/slicers/userSlice";
import Checkout from "./pages/checkout/Checkout.component";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setCurrentUser(user));
      } else {
        dispatch(setCurrentUser(null));
      }
    });
  }, []);
  return (
    <Router>
      <Header />
      <EmailNotVerified />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="confirmation/:opt" element={<ConfirmMsg />} />
        <Route path="shop" element={<Shop />}/>
        <Route  path="shop/:collection" element={<Collection />}/>
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
