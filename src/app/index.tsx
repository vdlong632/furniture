import { Navigate, Route, Routes } from 'react-router-dom';
import { NavbarLayout } from './components/organisms/NavbarLayout';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { SingleProductPage } from './pages/SingleProductPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route
        path="/*"
        element={
          <NavbarLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product" element={<SingleProductPage />} />
              <Route path="/comparison" element={<ComparisonPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </NavbarLayout>
        }
      />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
