import React, { useState, useEffect } from "react";
import { Product } from "../constants/types";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { initialProducts } from "../constants/products"; // Données des produits
import "../assets/css/ProductList.css";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Page actuelle
  const productsPerPage = 6; // Nombre de produits par page
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(initialProducts); // Chargement initial des produits
  }, []);

  // filtrage des produits par nom
  const filteredProducts = products.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  // Calcul des indices des produits à afficher sur la page actuelle
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product)); // Ajouter le produit au panier
  };

  return (
    <div className="">
      {/* filtre */}
      <input
        type="text"
        placeholder="Filtrer par nom"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-input"
      />
      <div className="product-list">
        {/* les produits */}
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
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
            <p>{product.description}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="add-to-cart-btn"
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
      {/* pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage * productsPerPage >= filteredProducts.length}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default ProductList;
