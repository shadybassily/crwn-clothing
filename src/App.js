//styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
//components
import HomePage from "./pages/homepage/HomePage.component";
import Section from "./pages/section/Section.component";
import Shop from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import SignIn from "./pages/signIn-page/SignIn.component";

//other imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./config/firebase";
import VerifyEmail from "./pages/verify-email/VerifyEmail.component";
import EmailNotVerified from "./components/verify-email/EmailNotVerified.component";
export const appContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
    });
  })
  return (
    <Router>
      <appContext.Provider value={{currentUser}}>
        <Header />
        <EmailNotVerified />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:section" element={<Section />} />
        </Routes>
      </appContext.Provider>
    </Router>
  );
}

export default App;
