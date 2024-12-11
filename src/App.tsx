import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Contact from "./pages/Contact";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/css/Nav.css";

const Navbar: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Boutique</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);
const App: React.FC = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;
