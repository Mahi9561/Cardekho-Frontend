import { useState } from "react";
import { BRAND_OPTIONS, BUDGET_RANGES } from "../../constants/budget.config";
import "./FindCar.scss";

function FindCar() {
  const [carType, setCarType] = useState("new");
  const [searchBy, setSearchBy] = useState("budget");
  const [budget, setBudget] = useState("");
  const [minBudget, setMinBudget] = useState<number | null>(null);
  const [maxBudget, setMaxBudget] = useState<number | null>(null);

  function handleBudgetChange(value: string) {
    setBudget(value);
    const sel = BUDGET_RANGES.find((r) => r.label === value) || null;
    setMinBudget(sel ? sel.min : null);
    setMaxBudget(sel ? sel.max : null);
  }

  function buildBudgetFilterParams() {
    return {
      minPrice: minBudget,
      maxPrice: maxBudget,
      type: carType,
    };
  }

  console.log("Budget Filter Params: ", buildBudgetFilterParams());
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
            value="buy"
            checked={searchBy === "budget"}
            onChange={() => setSearchBy("budget")}
            defaultChecked
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
              <option value=""></option>
              {BUDGET_RANGES.map((range) => (
                <option key={range.label} value={range.label}>
                  {range.label}
                </option>
              ))}
            </select>
            <select
              value={budget}
              onChange={(e) => handleBudgetChange(e.target.value)}
            >
              <option value=""></option>
              {BRAND_OPTIONS.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </>
        ) : (
          <select
            value={budget}
            onChange={(e) => handleBudgetChange(e.target.value)}
          >
            <option value=""></option>
            {BUDGET_RANGES.map((range) => (
              <option key={range.label} value={range.label}>
                {range.label}
              </option>
            ))}
          </select>
        )}
      </div>
      <button className="find-car__search-button">Search</button>
    </div>
  );
}

export default FindCar;
