import "./AllBrands.scss";
import { useFindBrands } from "../../components/Hooks/useFindBrands";

function AllBrands() {
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
