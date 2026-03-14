/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../img/logo.png";

function Navbae() {
  const [search, setSearch] = useState("");
  const userid = sessionStorage.getItem('userid')
  const getNavLinkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active" : "");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", search);
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo-wrap" style={{ textDecoration: "none" }}>
        <img src={logoImg} alt="ePower" className="nav-logo" />
        </Link>

        <nav className="nav-links">
          <NavLink to="/category/Men" className={getNavLinkClass}>
            Men
          </NavLink>
          <NavLink to="/category/Women" className={getNavLinkClass}>
            Women
          </NavLink>
          <NavLink to="/category/Kids" className={getNavLinkClass}>
            Kids
          </NavLink>
          <NavLink to="/category/Home" className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/category/Beauty" className={getNavLinkClass}>
            Beauty
          </NavLink>
          <NavLink to="/category/GenZ" className={getNavLinkClass}>
            GenZ
          </NavLink>
          <NavLink to="/category/Studio" className={getNavLinkClass}>
            Studio
          </NavLink>
        </nav>
      </div>

      <form className="nav-center" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for products, brands, trends..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className="nav-right">
        <Link to="/cart" className="nav-icon-btn nav-cart">
          🛒 <span>Cart</span>
        </Link>
      
        {!userid ? (
          <Link to="/login" className="nav-cta">
            👤Login
          </Link>
        ) : (
          <Link to="/profile" className="nav-cta">
            Profile
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbae;