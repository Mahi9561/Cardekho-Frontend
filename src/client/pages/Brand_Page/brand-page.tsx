import BrandCard from "../../components/Brand-card/brand-card";
import NewCarsComp from "../../components/new-car/new-car";
import "./brand-page.scss";

function BrandPage() {
  return (
    <div className="brand-page">
      <div className="brand-page__container">
        <NewCarsComp />
      </div>
      <BrandCard limit={9} />
    </div>
  );
}

export default BrandPage;
