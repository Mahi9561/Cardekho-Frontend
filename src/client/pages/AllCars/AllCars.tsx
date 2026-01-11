import { useSearchParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import "./AllCars.scss";

function AllCars() {
  const [searchParams] = useSearchParams();
  const fuel_type = searchParams.get("fuel_type") || undefined;

  return (
    <div className="all-cars-page">
      <section className="all-cars-page__car-cards">
        <h3>{fuel_type ? `${fuel_type} cars` : "All cars"}</h3>
        <Card fuel_type={fuel_type} />
      </section>
    </div>
  );
}

export default AllCars;
