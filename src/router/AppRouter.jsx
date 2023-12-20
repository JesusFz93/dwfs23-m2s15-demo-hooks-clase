import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import BrandsPage from "../pages/BrandsPage";
import AboutPage from "../pages/AboutPage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CustomersPage from "../pages/CustomersPage";
import BrandPage from "../pages/BrandPage";
import StatePage from "../pages/StatePage";
import MedicinesPage from "../pages/MedicinesPage";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/brands/:id" element={<BrandPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/state" element={<StatePage />} />
          <Route path="/medicines" element={<MedicinesPage />} />

          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default AppRouter;
