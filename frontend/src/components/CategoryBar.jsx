/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function CategoryBar({ categories, active, onChange, enableRouting = false }) {
  const navigate = useNavigate();

  const handleClick = (cat) => {
    onChange?.(cat);
    if (enableRouting && cat !== "All") {
      navigate(`/category/${encodeURIComponent(cat)}`);
    }
    if (enableRouting && cat === "All") {
      navigate("/");
    }
  };

  return (
    <nav className="category-bar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={
            "category-chip" + (active === cat ? " category-chip--active" : "")
          }
          onClick={() => handleClick(cat)}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}

export default CategoryBar;