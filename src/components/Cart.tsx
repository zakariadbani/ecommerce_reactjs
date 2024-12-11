import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { removeFromCart, updateQuantity } from "../features/cartSlice";
import "../assets/css/Cart.css";
import { Product } from "../constants/types";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id)); // Retirer un produit du panier
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity })); // Mettre à jour la quantité
  };

  return (
    <div className="cart-container">
      <h2>Panier</h2>
      {cart.map(
        ({ product, quantity }: { product: Product; quantity: number }) => (
          <div key={product.id} className="cart-item">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            ) : (
              <div className="image-placeholder">Aucune image disponible</div>
            )}
            <h3>{product.name}</h3>
            <p>Prix: {product.price}€</p>
            <div>
              <label>Quantité: </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  handleQuantityChange(product.id, parseInt(e.target.value))
                }
                className="quantity-input"
              />
            </div>
            <button
              onClick={() => handleRemove(product.id)}
              className="remove-btn"
            >
              Retirer
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Cart;
