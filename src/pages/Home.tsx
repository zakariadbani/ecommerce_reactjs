import React from "react";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import "../assets/css/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Bienvenue dans la boutique</h1>
      <div className="home-content">
        <div className="product-list-section">
          <ProductList />
        </div>
        <div className="cart-section">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Home;
