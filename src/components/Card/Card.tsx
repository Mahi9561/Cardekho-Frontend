import React from "react";
import "./Card.scss";
import demo from "../../assets/img/demo.avif";

function Card() {
  return (
    <div className="car-card">
      <div className="car-card__image-wrapper">
        <span className="car-card__badge">
          LAUNCHED ON : NOV 25, 2025
        </span>+

        <img src={demo} alt="Tata Sierra" />
      </div>

      <div className="car-card__content">
        <h3 className="car-card__title">Tata Sierra</h3>
        <p className="car-card__price">₹11.49 - 21.29 Lakh*</p>
        <button className="car-card__btn">View December Offers</button>
      </div>
    </div>
  );
}

export default Card;
