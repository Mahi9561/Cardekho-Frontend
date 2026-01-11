import { createAsyncThunk } from "@reduxjs/toolkit";
import { brandApi, getBrandById, type Brand } from "./brand.api";

export const loadBrands = createAsyncThunk<
  Brand[],
  void,
  { rejectValue: string }
>("brand/loadBrands", async (_, { rejectWithValue }) => {
  try {
    const res = await brandApi();
    const data = res.data as any;
    const list: Brand[] = Array.isArray(data)
      ? data
      : Array.isArray(data?.data)
      ? (data.data as Brand[])
      : Array.isArray(data?.brands)
      ? (data.brands as Brand[])
      : [];
    return list;
  } catch (err: any) {
    return rejectWithValue(
      err?.response?.data?.message ?? err?.message ?? "Failed to load brands"
    );
  }
});

export const loadBrandById = createAsyncThunk<
  Brand,
  string,
  { rejectValue: string }
>("brand/loadBrandById", async (id, { rejectWithValue }) => {
  try {
    const res = await getBrandById(id);
    return res.data as Brand;
  } catch (err: any) {
    return rejectWithValue(
      err?.response?.data?.message ?? err?.message ?? "Failed to load brand"
    );
  }
});
