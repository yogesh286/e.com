import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbae.jsx";
import HomePage from "./Pages/HomePage.jsx";
import CategoryPage from "./Pages/CategoryPage.jsx";
import ProductDetailPage from "./Pages/ProductDetailPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import Footer from "./components/Footer.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import RegistrationPage from "./Pages/RegistrationPage.jsx";
import OffersSection from "./components/OffersSection.jsx";
import AboutCompany from "./components/AboutCompany.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <OffersSection />
      <AboutCompany />
      <Footer />
    </div>
  );
}

export default App;