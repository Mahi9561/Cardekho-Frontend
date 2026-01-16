import { useMemo, useState } from "react";
import { BUDGET_RANGES } from "../../constants/budget.config";
import "./FindCar.scss";
import { useFindCar } from "../../Hooks/useFindCar";
import { useFindBrands } from "../../Hooks/useFindBrands";
import { useNavigate } from "react-router-dom";

type CarType = "new" | "used";
type SearchBy = "budget" | "brand";

function FindCar() {
  const navigate = useNavigate();
  const [carType, setCarType] = useState<CarType>("new");
  const [searchBy, setSearchBy] = useState<SearchBy>("budget");
  const [budget, setBudget] = useState("");
  const [fuelType, setFueltype] = useState<string>("");
  const [minBudget, setMinBudget] = useState<number | null>(null);
  const [maxBudget, setMaxBudget] = useState<number | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedBrandName, setSelectedBrandName] = useState<string>("");

  function handleBudgetChange(value: string) {
    setBudget(value);
    const sel = BUDGET_RANGES.find((r) => r.label === value) || null;
    setMinBudget(sel ? sel.min : null);
    setMaxBudget(sel ? sel.max : null);
  }

  function handleFuelTypeChange(nextFuelType: string) {
    setFueltype(nextFuelType);
  }

  function handleBrandSelect(value: string) {
    setSelectedBrand(value);
    setSelectedModel("");

    const selected = brands.find((b) => String(b.brand_id) === value);
    setSelectedBrandName(selected?.name ?? "");
  }

  function handleModelSelect(model: string) {
    setSelectedModel(model);
  }

  console.log(selectedModel);
  const budgetFilters = useMemo(() => {
    return {
      price_min: minBudget ?? undefined,
      price_max: maxBudget ?? undefined,
      fuel_type: fuelType || undefined,
      model: selectedModel || undefined,
    };
  }, [minBudget, maxBudget, fuelType, selectedModel]);

  const brandFilters = useMemo(() => {
    return {
      brand: selectedBrandName || undefined,
      model: selectedModel || undefined,
    };
  }, [selectedBrandName, selectedModel]);

  const activeFilters = searchBy === "budget" ? budgetFilters : brandFilters;

  const enabled =
    searchBy === "budget"
      ? minBudget !== null || maxBudget !== null
      : !!selectedBrandName;

  const { cars, carLoading, carError } = useFindCar({
    filters: activeFilters,
    enabled,
  });

  const uniqueCars = useMemo(() => {
    return Array.from(
      new Map(cars.map((car) => [car.model_name, car])).values()
    );
  }, [cars]);
  console.log("uniqueCars", uniqueCars);
  const uniqueCarsFuelType = useMemo(() => {
    return Array.from(
      new Map(cars.map((car) => [car.fuel_type, car])).values()
    );
  }, [cars]);

  const handleSubmit = () => () => {
    const params = new URLSearchParams();
    Object.entries(activeFilters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && String(value).length > 0) {
        params.set(key, String(value));
      }
    });
    navigate(`/new-cars${params.toString() ? `?${params.toString()}` : ""}`);
  };

  const { brands, loading, error } = useFindBrands();

  if (loading || carLoading) {
    return <div className="car-card__status">Loading...</div>;
  }

  if (error || carError) {
    return (
      <div className="car-card__status car-card__status--error">
        {String(error ?? carError)}
      </div>
    );
  }

  return (
    <div className="find-car">
      <h2 className="find-car__title">Find your right car</h2>

      <div className="find-car__tabs">
        <button
          className={carType === "new" ? "active" : ""}
          onClick={() => setCarType("new")}
        >
          New Car
        </button>
        <button
          className={carType === "used" ? "active" : ""}
          onClick={() => setCarType("used")}
        >
          Used Car
        </button>
      </div>

      <div className="find-car__radio-buttons">
        <label className={searchBy === "budget" ? "active" : ""}>
          <input
            type="radio"
            name="buy-or-lease"
            value="budget"
            checked={searchBy === "budget"}
            onChange={() => setSearchBy("budget")}
          />
          By Budget
        </label>

        <label className={searchBy === "brand" ? "active" : ""}>
          <input
            type="radio"
            name="buy-or-lease"
            value="brand"
            checked={searchBy === "brand"}
            onChange={() => setSearchBy("brand")}
          />
          By Brand
        </label>
      </div>

      <div className="find-car__fields">
        {searchBy === "budget" ? (
          <>
            <select
              value={budget}
              onChange={(e) => handleBudgetChange(e.target.value)}
            >
              <option value="">Select Budget</option>
              {BUDGET_RANGES.map((range) => (
                <option key={range.label} value={range.label}>
                  {range.label}
                </option>
              ))}
            </select>

            <select
              value={fuelType}
              onChange={(e) => handleFuelTypeChange(e.target.value)}
            >
              <option value="">All vehicle types</option>
              {uniqueCarsFuelType
                .filter((car) => !!car.fuel_type)
                .map((car) => (
                  <option
                    key={String(car.fuel_type)}
                    value={String(car.fuel_type)}
                  >
                    {car.fuel_type}
                  </option>
                ))}
            </select>
          </>
        ) : (
          <>
            <select
              value={selectedBrand}
              onChange={(e) => handleBrandSelect(e.target.value)}
            >
              <option value="">Select Brand</option>
              {brands.map((brand) => (
                <option key={brand.brand_id} value={brand.brand_id}>
                  {brand.name}
                </option>
              ))}
            </select>

            <select
              value={selectedModel}
              onChange={(e) => handleModelSelect(e.target.value)}
            >
              <option value="">Select Model</option>
              {uniqueCars.map((car) => (
                <option key={car.id} value={String(car.model_name)}>
                  {car.model_name}
                </option>
              ))}
            </select>
          </>
        )}
      </div>

      <button className="find-car__search-button" onClick={handleSubmit()}>Search</button>
    </div>
  );
}

export default FindCar;
