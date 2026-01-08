import GeneralHeader from "../components/general-header/generalHeader";
import Header from "../components/Navbar/Header";
// import FindCar from "../components/FindCar/FindCar";
// import HomePage from "../pages/HomePage/HomePage";
import Cardetails from "../pages/CarDetails/Cardetails";

function AppRoutes() {
  return (
    <>
      <GeneralHeader />
      <Header />
      {/* <FindCar />
      <HomePage /> */}
      <Cardetails />
    </>
  );
}

export default AppRoutes;
