import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetailPage() {

  const { productId } = useParams();
  console.log(productId);

  const [product, setProduct] = useState(null);

  useEffect(() => {

    async function getData() {
debugger
      const res = await fetch("http://localhost:3004/productid/" + productId);
      const data = await res.json();

      setProduct(data);

    }

    getData();

  }, [productId]);

  if (!product) {
    return (
      <section className="products-section">
        <h2>Product not found</h2>
      </section>
    );
  }

  return (
    <section className="products-section">
      <div className="product-detail-layout">

        <div className="product-image-wrap">
        <img src={`http://localhost:3004/product/${product.profile}`} alt={product.name}/>
        </div>

        <div className="product-info">

          <h1>{product.name}</h1>

          <p className="product-meta">
            {/* {product.category} • {product.tags?.join(" • ")} */}
          </p>

          <div className="product-bottom">
            <span className="price">₹{product.price}</span>

            {product.originalPrice && (
              <span className="original">₹{product.originalPrice}</span>
            )}
          </div>

          <h5 className="product-size-title">SELECT SIZE :-</h5>

          <div className="radias-parent">
            <div className="radias-class">XS</div>
            <div className="radias-class">S</div>
            <div className="radias-class">M</div>
            <div className="radias-class">L</div>
            <div className="radias-class">XL</div>
            <div className="radias-class">XXL</div>
          </div>

          <button className="hero-btn" style={{ marginTop: "16px" }}>
            Add to Cart
          </button>

          <button className="hero-btns" style={{ marginTop: "16px" }}>
            WISHLIST
          </button>

        </div>

      </div>
    </section>
  );
}

export default ProductDetailPage;