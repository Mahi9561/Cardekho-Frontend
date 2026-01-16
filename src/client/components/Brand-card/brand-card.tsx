import React from "react";
import "./brand-card.scss";
import { useFindBrands } from "../../Hooks/useFindBrands";

function BrandCard({ limit }: { limit?: number }) {
  const { brands, loading, error } = useFindBrands();

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

  const visiblebrands =
    typeof limit === "number" && Array.isArray(brands)
      ? brands.slice(0, limit)
      : brands;
  return (
    <div className="brand-comp">
      <h4 className="brand-comp__title">Popular brands</h4>
      <div className="brand-comp__list">
        {visiblebrands.map((brand) => (
          <div className="brand-comp__item" key={brand.brand_id}>
            <div className="brand-comp__image-wrapper">
              <img
                src={`${(brand as any).logo_url ?? brand.logoUrl ?? ""}`}
                alt={`${brand.name}`}
              />
              <p className="brand-comp__name">{brand.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandCard;
