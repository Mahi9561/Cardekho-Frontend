import "./brand.scss";
import { useFindBrands } from "../Hooks/useFindBrands";

function Brand({ limit }: { limit?: number }) {
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
    <div className="brand-card-lists">
      {visiblebrands.map((brand) => (
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
  );
}
export default Brand;
