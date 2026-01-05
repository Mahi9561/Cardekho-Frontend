import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadCars, loadCarById } from "./car.thunk.ts";
import type { Car } from "./car.api";

type CarState = {
  items: Car[];
  selected: Car | null;
  loading: boolean;
  error: string | null;
};

const initialState: CarState = {
  items: [],
  selected: null,
  loading: false,
  error: null,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    clearSelected(state) {
      state.selected = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCars.fulfilled, (state, action: PayloadAction<Car[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadCars.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) ?? action.error.message ?? null;
      })
      .addCase(loadCarById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCarById.fulfilled, (state, action: PayloadAction<Car>) => {
        state.loading = false;
        state.selected = action.payload;
      })
      .addCase(loadCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) ?? action.error.message ?? null;
      });
  },
});

export const { clearSelected } = carSlice.actions;
export default carSlice.reducer;
