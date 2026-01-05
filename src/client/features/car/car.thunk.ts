import { createAsyncThunk } from "@reduxjs/toolkit";
import { carApi, type Car, type CarFilters } from "./car.api";

export const loadCars = createAsyncThunk<Car[], CarFilters | void, { rejectValue: string }>(
  "car/loadCars",
  async (filters = {}, { rejectWithValue }) => {
    try {
      return await carApi.getCars(filters ?? {});
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.message ?? err?.message ?? "Failed to load cars");
    }
  }
);

export const loadCarById = createAsyncThunk<Car, string, { rejectValue: string }>(
  "car/loadCarById",
  async (id, { rejectWithValue }) => {
    try {
      return await carApi.getCarById(id);
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.message ?? err?.message ?? "Failed to load car");
    }
  }
);
