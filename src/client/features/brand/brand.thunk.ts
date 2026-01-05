import { createAsyncThunk } from "@reduxjs/toolkit";
import { brandApi, type Brand } from "./brand.api";

export const loadBrands = createAsyncThunk<Brand[], void, { rejectValue: string }>(
	"brand/loadBrands",
	async (_, { rejectWithValue }) => {
		try {
			return await brandApi.getBrands();
		} catch (err: any) {
			return rejectWithValue(err?.response?.data?.message ?? err?.message ?? "Failed to load brands");
		}
	}
);

export const loadBrandById = createAsyncThunk<Brand, string, { rejectValue: string }>(
	"brand/loadBrandById",
	async (id, { rejectWithValue }) => {
		try {
			return await brandApi.getBrandById(id);
		} catch (err: any) {
			return rejectWithValue(err?.response?.data?.message ?? err?.message ?? "Failed to load brand");
		}
	}
);

