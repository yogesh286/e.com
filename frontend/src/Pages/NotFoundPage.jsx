import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="products-section empty-state">
      <h2>Page not found</h2>
      <p>The page you are looking for doesn&apos;t exist.</p>
      <Link to="/" className="hero-btn" style={{ marginTop: "12px" }}>
        Go back home
      </Link>
    </section>
  );
}

export default NotFoundPage;