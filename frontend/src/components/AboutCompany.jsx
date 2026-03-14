function AboutCompany() {
    return (
      <section className="about-company">
        <div className="about-company-container">
          {/* Left side: main text + metrics */}
          <div className="about-company-text">
            <p className="about-company-tag">ABOUT EPOWER</p>
            <h2>Your everyday fashion & lifestyle studio</h2>
            <p className="about-company-sub">
              ePower Studio ek modern e‑commerce destination hai jahan aapko Men, Women,
              Kids, GenZ, Beauty aur Home ke selected styles milte hain. Hum random
              products nahi, balki curated looks dikhate hain jo aapke daily life ke
              saath actually kaam aate hain.
            </p>
  
            <div className="about-company-metrics">
              <div className="about-metric">
                <span className="about-metric-value">2K+</span>
                <span className="about-metric-label">Curated styles</span>
              </div>
              <div className="about-metric">
                <span className="about-metric-value">100+</span>
                <span className="about-metric-label">Trusted brands</span>
              </div>
              <div className="about-metric">
                <span className="about-metric-value">4.6★</span>
                <span className="about-metric-label">Customer rating</span>
              </div>
            </div>
          </div>
  
          {/* Right side: highlights cards */}
          <div className="about-company-highlights">
            <div className="highlight-card">
              <h4>Curated, not cluttered</h4>
              <p>
                Har category me limited but carefully picked options, taaki aapko
                1000 products scroll karne ki zaroorat na pade.
              </p>
            </div>
            <div className="highlight-card">
              <h4>Made for Indian lifestyles</h4>
              <p>
                Fits, fabrics aur pricing India ke weather, college/office aur weekend
                plans ko dhyan me rakh kar design ki gayi hai.
              </p>
            </div>
            <div className="highlight-card">
              <h4>Secure & simple experience</h4>
              <p>
                Safe payments, easy returns aur clean UI — taaki shopping fast aur
                stress‑free lage, chahe aap mobile use kar rahe ho ya laptop.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default AboutCompany;