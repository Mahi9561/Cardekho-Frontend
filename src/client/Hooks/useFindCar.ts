import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../app/store";
import { loadCars } from "../features/car/car.thunk";
import type { CarFilters } from "../features/car/car.api";
import {
  selectCarError,
  selectCarLoading,
  selectCars,
} from "../features/car/car.selector";

export type UseFindCarParams = CarFilters & {
  filters?: CarFilters;
  enabled?: boolean;
};

export function useFindCar(params: UseFindCarParams = {}) {
  const dispatch = useDispatch<AppDispatch>();
  const cars = useSelector(selectCars);
  const carLoading = useSelector(selectCarLoading);
  const carError = useSelector(selectCarError);

  const { filters, enabled = true, ...directFilters } = params;
  const directKey = useMemo(() => JSON.stringify(directFilters ?? {}), [directFilters]);

  const mergedFilters: CarFilters = useMemo(() => {
    return { ...(filters ?? {}), ...directFilters };
  }, [filters, directKey]);

  const reload = useCallback(() => {
    if (!enabled) return;
    dispatch(loadCars(mergedFilters));
  }, [dispatch, enabled, mergedFilters]);

  useEffect(() => {
    reload();
  }, [reload]);

  return { cars, carLoading, carError, reload, filters: mergedFilters };
}
