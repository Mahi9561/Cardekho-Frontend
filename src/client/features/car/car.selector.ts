import type { RootState } from "../../app/store";

export const selectCarState = (state: RootState) => state.car;
export const selectCars = (state: RootState) => state.car.items;
export const selectCarLoading = (state: RootState) => state.car.loading;
export const selectCarError = (state: RootState) => state.car.error;
export const selectSelectedCar = (state: RootState) => state.car.selected;
