import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "../features/brand/brand.slice";
import carReducer from "../features/car/car.slice";

export const store = configureStore({
  reducer: {
    brand: brandReducer,
    car: carReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
