import GeneralHeader from "../components/general-header/generalHeader";
import Header from "../components/Navbar/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Cardetails from "../pages/CarDetails/Cardetails";
import AllCars from "../pages/AllCars/AllCars";
import AllBrands from "../pages/Brands/AllBrands";
import BrandPage from "../pages/Brand_Page/brand-page";

function AppRoutes() {
  return (
    <>
      <GeneralHeader />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<AllCars />} />
        <Route path="/new-cars" element={<BrandPage />} />
        <Route path="/brand" element={<AllBrands />} />
        <Route path="/car-details/:id?" element={<Cardetails />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
