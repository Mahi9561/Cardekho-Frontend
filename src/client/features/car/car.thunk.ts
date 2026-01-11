import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCars, getCarById, type Car, type CarFilters } from "./car.api";

export const loadCars = createAsyncThunk<
  Car[],
  CarFilters,
  { rejectValue: string }
>("car/loadCars", async (filters = {}, { rejectWithValue }) => {
  try {
    const res = await getCars(filters);
    const data = res.data as any;
    // Normalize various possible shapes into an array
    const carsArray: Car[] = Array.isArray(data)
      ? (data as Car[])
      : Array.isArray(data?.cars)
      ? (data.cars as Car[])
      : Array.isArray(data?.data)
      ? (data.data as Car[])
      : [];
    return carsArray;
  } catch (err: any) {
    return rejectWithValue(
      err?.response?.data?.message ?? err?.message ?? "Failed to load cars"
    );
  }
});

export const loadCarById = createAsyncThunk<
  Car,
  string,
  { rejectValue: string }
>("car/loadCarById", async (id, { rejectWithValue }) => {
  try {
    const res = await getCarById(id);
    return res.data as Car;
  } catch (err: any) {
    return rejectWithValue(
      err?.response?.data?.message ?? err?.message ?? "Failed to load car"
    );
  }
});
