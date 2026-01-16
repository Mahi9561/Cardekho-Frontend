import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../app/store";
import {
	selectBrandError,
	selectBrandLoading,
	selectBrands,
} from "../features/brand/brand.selector";
import { loadBrands } from "../features/brand/brand.thunk";

export type UseFindBrandsParams = {
	enabled?: boolean;
};

export function useFindBrands(params: UseFindBrandsParams = {}) {
  const dispatch = useDispatch<AppDispatch>();
  const brands = useSelector(selectBrands);
  const loading = useSelector(selectBrandLoading);
  const error = useSelector(selectBrandError);

	const { enabled = true } = params;

	const reload = useCallback(() => {
		if (!enabled) return;
		dispatch(loadBrands());
	}, [dispatch, enabled]);

  useEffect(() => {
    reload();
  }, [reload]);

	return { brands, loading, error, reload };
}
