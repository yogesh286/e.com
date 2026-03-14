import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductGrid from "../components/ProductGrid.jsx";

function CategoryPage() {

  const { categoryName } = useParams();
  const [categorydata, setcategorydata] = useState([]);

  useEffect(() => {

    async function Datacategory() {
        // alert(categoryName);
      const res = await fetch(`http://localhost:3004/product/${categoryName}`);
      const data = await res.json();

      console.log(data);

      setcategorydata(data);
    }

    Datacategory();

  }, [categoryName]);

  return (
    <section className="products-section">

      <div className="section-header">
        <h2>{categoryName}</h2>

        <p>
          {categorydata.length} item
          {categorydata.length === 1 ? "" : "s"} in this category
        </p>
      </div>

      <div className="product-grid">
      {categorydata.map((p) => (
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

    </section>
  );
}

export default CategoryPage;