import "./Card.scss";
import demo from "../../assets/img/demo.avif";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { loadCars } from "../../features/car/car.thunk";
import {
  selectCars,
  selectCarLoading,
  selectCarError,
} from "../../features/car/car.selector";
import type { CarFilters } from "../../features/car/car.api";

type CardProps = Partial<CarFilters> & { filters?: CarFilters; limit?: number };

function Card(props: CardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const cars = useSelector(selectCars);
  const loading = useSelector(selectCarLoading);
  const error = useSelector(selectCarError);

  const { filters, limit, ...directFilters } = props;
  const mergedFilters: CarFilters = { ...(filters ?? {}), ...directFilters };

  useEffect(() => {
    dispatch(loadCars(mergedFilters));
  }, [dispatch, JSON.stringify(mergedFilters)]);

  if (loading) {
    return <div className="car-card__status">Loading cars...</div>;
  }

  if (error) {
    return (
      <div className="car-card__status car-card__status--error">{error}</div>
    );
  }

  if (!Array.isArray(cars)) {
    return <div className="car-card__status">No cars found</div>;
  }

  if (cars.length === 0) {
    return <div className="car-card__status">No cars found</div>;
  }

  const visibleCars = typeof limit === "number" ? cars.slice(0, limit) : cars;

  return (
    <div className="car-card-list">
      {visibleCars.map((car) => (
        <div className="car-card" key={car.id}>
          <div className="car-card__image-wrapper">
            {/* <span className="car-card__badge">LAUNCHED ON : NOV 25, 2025</span> */}
            <img src={demo} alt={`${car.brand_name} ${car.model_name}`} />
          </div>

          <div className="car-card__content">
            <h3 className="car-card__title">
              {car.brand_name} {car.model_name}
            </h3>
            <p className="car-card__price">
              {car.price
                ? `₹${car.price.toLocaleString("en-IN")}`
                : "Price not available"}
            </p>
            <button className="car-card__btn">View Offers</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
