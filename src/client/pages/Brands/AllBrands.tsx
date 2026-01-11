import "./AllBrands.scss";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../app/store";
import {
  selectBrandError,
  selectBrandLoading,
  selectBrands,
} from "../../features/brand/brand.selector";
import { useEffect } from "react";
import { loadBrands } from "../../features/brand/brand.thunk";

function AllBrands() {
  const dispatch = useDispatch<AppDispatch>();
  const brands = useSelector(selectBrands);
  const loading = useSelector(selectBrandLoading);
  const error = useSelector(selectBrandError);

  useEffect(() => {
    dispatch(loadBrands());
  }, [dispatch]);

  if (loading) {
    return <div className="car-card__status">Loading brands...</div>;
  }

  if (error) {
    return (
      <div className="car-card__status car-card__status--error">{error}</div>
    );
  }
  if (!Array.isArray(brands) || brands.length === 0) {
    return <div className="car-card__status">No brands found</div>;
  }

  return (
    <div className="barnds-page">
      <div className="brand-card-list">
        {brands.map((brand) => (
          <div className="brand-card" key={brand.brand_id}>
            <div className="brand-card__image-wrapper">
              <img
                src={`${(brand as any).logo_url ?? brand.logoUrl ?? ""}`}
                alt={`${brand.name}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBrands;
