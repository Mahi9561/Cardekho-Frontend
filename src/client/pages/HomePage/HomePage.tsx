import "./Homepage.scss";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import Brand from "../../components/Brand/brand";
import FindCar from "../../components/FindCar/FindCar";

function HomePage() {
  return (
    <>
    <FindCar />
      <div className="home-page">
        <section className="home-page__car-cards">
          <h3 className="home-page__title">Electric cars</h3>
          <Card fuel_type="Electric" limit={5} />
          <div className="home-page__actions">
            <Link to="/cars?fuel_type=Electric" className="home-page__view-all">
              View all cars
            </Link>
          </div>
        </section>
      </div>

      <div className="home-page">
        <section className="home-page__car-cards">
          <h3 className="home-page__title">Electric cars</h3>
          <Brand limit={10} />
          <div className="home-page__actions">
            <Link to="/brand" className="home-page__view-all">
              View all cars
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
