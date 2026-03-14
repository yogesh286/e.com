import { useMemo, useState } from "react";
import CategoryBar from "../components/CategoryBar.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import { PRODUCTS, CATEGORIES } from "../data/products.js";

function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const inCategory =
        activeCategory === "All" || p.category === activeCategory;
      const inSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );
      return inCategory && inSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      {/* Hero section yahan rakh sakte ho */}
      <section className="hero">
  <div className="hero-content">
    <p className="hero-tag">NEW • E‑POWER STUDIO</p>
    <h1>
      India&apos;s new‑age{" "}
      <span>fashion & lifestyle</span>
    </h1>
    <p className="hero-sub">
      Drop‑ready fits for Men, Women, Kids & GenZ — plus beauty and home picks
      that look straight out of your Pinterest board.
    </p>
    <div className="hero-cta-row">
      <button className="hero-btn">Shop the latest drop</button>
      <button className="hero-btn-secondary">Explore Studio edits</button>
    </div>
    <p className="hero-mini">
      2K+ styles · Free delivery above ₹799 · Easy returns
    </p>
  </div>

  <div className="hero-visual">
    <div className="hero-card hero-card--left">
      <img
        src="https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg"
        alt="GenZ streetwear"
      />
      <span className="hero-pill">Nike-Max</span>
    </div>
    <div className="hero-card hero-card--right">
      <img
        src="https://rukminim2.flixcart.com/image/372/360/xif0q/shoe/k/a/e/-original-imahgxhnadtpzyqx.jpeg?q=60"
        alt="Studio co‑ord"
      />
      <span className="hero-pill">Red-Tape</span>
    </div>
    <div className="hero-floating-tag">✨ Trending now</div>
  </div>
</section>

      <CategoryBar
        categories={CATEGORIES}
        active={activeCategory}
        onChange={setActiveCategory}
        enableRouting={true}
      />

      <section className="products-section">
        <div className="section-header">
          <h2>Featured picks</h2>
          <p>
            {filteredProducts.length} item
            {filteredProducts.length === 1 ? "" : "s"} found
          </p>
        </div>
        <ProductGrid products={filteredProducts} />
      </section>
      
    </>
  );
}

export default HomePage;