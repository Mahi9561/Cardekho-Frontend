import type { RootState } from "../../app/store";

export const selectBrandState = (state: RootState) => state.brand;
export const selectBrands = (state: RootState) => state.brand.items;
export const selectBrandLoading = (state: RootState) => state.brand.loading;
export const selectBrandError = (state: RootState) => state.brand.error;
export const selectSelectedBrand = (state: RootState) => state.brand.selected;

