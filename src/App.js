//styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
//components
import HomePage from "./pages/homepage/HomePage.component";
//other imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section from "./pages/section/Section.component";
import Shop from "./pages/shop/Shop.component";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:section" element={<Section />} />
      </Routes>
    </Router>
  );
}

export default App;
