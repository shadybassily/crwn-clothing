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
import { useAuthState } from "react-firebase-hooks/auth";
import { createContext } from "react";
import { auth } from "./config/firebase";
export const appContext = createContext();

function App() {
const [currentUser] = useAuthState(auth)
  return (
    <Router>
      <appContext.Provider value={{currentUser}}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:section" element={<Section />} />
        </Routes>
      </appContext.Provider>
    </Router>
  );
}

export default App;
