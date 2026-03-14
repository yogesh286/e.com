function OffersSection() {
    return (
      <section className="offers-section">
        <div className="offers-header">
          <h2>Today&apos;s exclusive offers</h2>
          <p>Grab these picks before they are gone.</p>
        </div>
  
        <div className="offers-grid">
          <article className="offer-card">
            <div className="offer-image">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/040/147/420/small/self-assured-cheerful-carefree-young-girl-with-tanned-skin-and-fair-hair-pointing-proudly-at-herself-bragging-about-own-skills-and-achievements-standing-cool-feeling-awesome-in-new-hoodie-photo.jpg"
                alt="GenZ fits"
              />
            </div>
            <div className="offer-body">
              <p className="offer-tag">Flat 40% off</p>
              <h3>GenZ streetwear drop</h3>
              <p className="offer-text">Oversized tees, cargos & hoodies curated for your daily fits.</p>
            </div>
          </article>
  
          <article className="offer-card">
            <div className="offer-image">
              <img
                src="https://www.yuvanivesture.com/cdn/shop/articles/Yuvani-Blog-46.jpg?v=1763469018&width=1100"
                alt="Studio edit"
              />
            </div>
            <div className="offer-body">
              <p className="offer-tag">Limited time</p>
              <h3>Studio co‑ord sets</h3>
              <p className="offer-text">Premium co‑ords for weekend plans, starting at ₹1,899.</p>
            </div>
          </article>
  
          <article className="offer-card">
            <div className="offer-image">
              <img
                src="https://images.yourstory.com/cs/4/211ccaf00e6d11e997fe8f165dce9bb1/Imageifxu-1596799036123-1601633425902.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"
                alt="Beauty picks"
              />
            </div>
            <div className="offer-body">
              <p className="offer-tag">Combo offer</p>
              <h3>Beauty glow kits</h3>
              <p className="offer-text">Buy 2 serums, get 1 sheet mask free on select brands.</p>
            </div>
          </article>
        </div>
      </section>
    );
  }
  
  export default OffersSection;