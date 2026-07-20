import { useDispatch, useSelector } from "react-redux";
import carImage from "../../assets/img/demo.avif";
import "./CarHeader.scss";
import {
  selectCarError,
  selectCarLoading,
  selectSelectedCar,
} from "../../features/car/car.selector";
import type { AppDispatch } from "../../app/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadCarById } from "../../features/car/car.thunk";

function CarHeader() {
  const dispatch = useDispatch<AppDispatch>();
  const car = useSelector(selectSelectedCar);
  const loading = useSelector(selectCarLoading);
  const error = useSelector(selectCarError);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(loadCarById(id));
    }
  }, [dispatch, id]);

  const cars = useSelector(selectSelectedCar);
  console.log("cars", cars);
  console.log("cars", cars);
  if (loading) {
    return <div className="car-card__status">Loading cars...</div>;
  }

  if (error) {
    return (
      <div className="car-card__status car-card__status--error">{error}</div>
    );
  }
  if (!car) {
    return <div className="car-card__status">No cars found</div>;
  }
  return (
    <div className="car-details">
      <div className="car-details__thumbs">
        <div className="thumb">+6 Colours</div>
        <div className="thumb">
          +121
          <br />
          Images
        </div>
        <div className="thumb">360°</div>
        <div className="thumb">Videos</div>
      </div>

      {/* MAIN IMAGE */}
      <div className="car-details__image">
        <img
          src={carImage}
          alt={`${car?.brand_name || "Brand"} ${car?.model_name || "Model"}`}
        />
        {/* <button className="nav-arrow right">›</button> */}
      </div>

      {/* INFO SECTION */}
      <div className="car-details__info">
        <h1 className="title">{car?.model_name || "Model"}</h1>

        <div className="rating">
          ⭐ 4.8 <span>133 Reviews</span>
          <button className="reward-btn">Rate & Win ₹1000</button>
        </div>

        <p className="desc">
          The 2025 Tata Sierra has been launched at an introductory price of Rs
          11.49 Lakh (ex-showroom). It will be offered in multiple variants...
          <span className="more">more</span>
        </p>

        <div className="price">
          {car?.price ? `₹ ${car.price.toLocaleString()}` : "Price Unavailable"}
          <span className="onroad">Get On-Road Price</span>
        </div>

        <p className="location">
          *Ex-Showroom Price in <span>Pune</span>
        </p>

        <button className="cta-btn">View December Offers</button>

        <p className="offer-note">⏳ Hurry up to lock festive offers!</p>
      </div>
    </div>
  );
}

export default CarHeader;
