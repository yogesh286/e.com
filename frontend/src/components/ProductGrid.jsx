/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductGrid() {
  const [products, setProducts] = useState([]);
  

useEffect(() => {

  async function getData() {

    const res = await fetch("http://localhost:3004/product");
    const data = await res.json();

    setProducts(data);

  }

  getData();

}, []);
  const navigate = useNavigate();

  

  return (
    <div className="product-grid">
      {products.map((p) => (
        <article
          key={p.id}
          className="product-card"
          onClick={() => navigate(`/product/${p._id}`)}
        >
          <div className="product-image-wrap">
            <img src={'http://localhost:3004/product/'+p.profile} alt={p.name} loading="lazy" />
            {p.badge && <span className="badge">{p.badge}</span>}
          </div>
          <div className="product-info">
            <h3>{p.name}</h3>
            <p className="product-meta">
               
            </p>
            <div className="product-bottom">
              <span className="price">₹{p.price}</span>
              {p.originalPrice && (
                <span className="original">₹{p.originalPrice}</span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProductGrid;