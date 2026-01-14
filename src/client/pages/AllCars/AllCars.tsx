import { useSearchParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import "./AllCars.scss";

function AllCars() {
  const [searchParams] = useSearchParams();

  return (
    <div className="all-cars-page">
      <section className="all-cars-page__car-cards">
        <h3>
          {searchParams.get("brand")
            ? `${searchParams.get("brand")} cars`
            : searchParams.get("fuel_type")
            ? `${searchParams.get("fuel_type")} cars`
            : "All cars"}
        </h3>
        <Card
          fuel_type={searchParams.get("fuel_type") || undefined}
          model={searchParams.get("model") || undefined}
          brand={searchParams.get("brand") || undefined}
          price_max={searchParams.get("price_max") ? Number(searchParams.get("price_max")) : undefined}
          price_min={searchParams.get("price_min") ? Number(searchParams.get("price_min")) : undefined}
        />
      </section>
    </div>
  );
}

export default AllCars;
