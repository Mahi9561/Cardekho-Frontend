import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { loadCars } from "../../features/car/car.thunk";
import type { CarFilters } from "../../features/car/car.api";
import {
  selectCarError,
  selectCarLoading,
  selectCars,
} from "../../features/car/car.selector";

export type UseFindCarParams = CarFilters & {
  filters?: CarFilters;
  enabled?: boolean;
};

export function useFindCar(params: UseFindCarParams = {}) {
  const dispatch = useDispatch<AppDispatch>();
  const cars = useSelector(selectCars);
  const loading = useSelector(selectCarLoading);
  const error = useSelector(selectCarError);

  const { filters, enabled = true, ...directFilters } = params;

  const mergedFilters: CarFilters = useMemo(() => {
    return { ...(filters ?? {}), ...directFilters };
  }, [filters, directFilters]);

  console.log(mergedFilters);
  const reload = useCallback(() => {
    if (!enabled) return;
    dispatch(loadCars(mergedFilters));
  }, [dispatch, enabled, mergedFilters]);

  useEffect(() => {
    reload();
  }, [reload]);

  return { cars, loading, error, reload, filters: mergedFilters };
}
