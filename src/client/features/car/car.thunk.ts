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
    const data = res.data as any;
    // Normalize various possible shapes into a single car object
    const car: Car | undefined = Array.isArray(data)
      ? (data[0] as Car)
      : Array.isArray(data?.cars)
      ? (data.cars?.[0] as Car)
      : (data?.car as Car) ?? (data?.data as Car) ?? (data as Car);

    if (!car || typeof car !== "object") {
      throw new Error("Car not found");
    }

    return car;
  } catch (err: any) {
    return rejectWithValue(
      err?.response?.data?.message ?? err?.message ?? "Failed to load car"
    );
  }
});
