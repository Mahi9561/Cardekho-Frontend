import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import type { CarFilters } from "../utils/CarFilters.interface";

export const useCarFilters = (): CarFilters => {
  const [searchParams] = useSearchParams();

  const key = searchParams.toString();

  return useMemo(() => {
    return {
      fuel_type: searchParams.get("fuel_type") || undefined,
      model: searchParams.get("model") || undefined,
      brand: searchParams.get("brand") || undefined,
      price_min: searchParams.get("price_min")
        ? Number(searchParams.get("price_min"))
        : undefined,
      price_max: searchParams.get("price_max")
        ? Number(searchParams.get("price_max"))
        : undefined,
    };
  }, [key]);
};
