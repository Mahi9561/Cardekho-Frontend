import demo from "../../assets/img/demo.avif";
import "./new-car.scss";
import { useFindCar } from "../../Hooks/useFindCar";
import { useCarFilters } from "../../Hooks/useCarFilters";

function NewCarsComp() {
  const { cars, carLoading, carError } = useFindCar({
    filters: useCarFilters(),
    enabled: true,
  });

  if (carLoading) {
    return <div className="car-card__status">Loading...</div>;
  }

  if (carError) {
    return (
      <div className="car-card__status car-card__status--error">
        {String(carError)}
      </div>
    );
  }

  return (
    <div className="new-cars">
      <div className="new-cars__list">
        {cars.map((car) => (
          <div className="new-cars__card" key={car.id}>
            <div className="new-cars__img-container">
              <img src={demo} alt={String(car.model_name)} />
            </div>
            <div className="new-cars__car-details">
              <h2 className="new-cars__car-name">{String(car.model_name)}</h2>
              <div className="new-cars__car-nameplate">
                <h3 className="new-cars__cars-price">Rs.{car.price} Lakh*</h3>
                <p className="new-cars__cars-ex-showroom">(ex-showroom price)</p>
              </div>
              <p className="new-cars__cars-transmission">
                {car.fuel_type} • {car.mileage_kmpl} kmpl • {car.transmission}
              </p>
              <p className="new-cars__cars-engine">
                {car.engine_cc} cc • {car.seating_capacity} Seats
              </p>
              <button className="new-cars__view-offers-button">View Offers</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewCarsComp;
