import React from "react";
import carImage from "../../assets/img/demo.avif";
import "./CarHeader.scss";


function CarHeader() {
  return (
    <div className="car-details">
      {/* LEFT THUMB COLUMN */}
      <div className="car-details__thumbs">
        <div className="thumb">
          +6
          Colours
        </div>
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
        <img src={carImage} alt="Tata Sierra" />
        {/* <button className="nav-arrow right">›</button> */}
      </div>

      {/* INFO SECTION */}
      <div className="car-details__info">
        <h1 className="title">Tata Sierra</h1>

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
          ₹ 11.49 - 21.29 Lakh*
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
