import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadBrands, loadBrandById } from "./brand.thunk";
import type { Brand } from "./brand.api";

type BrandState = {
	items: Brand[];
	selected: Brand | null;
	loading: boolean;
	error: string | null;
};

const initialState: BrandState = {
	items: [],
	selected: null,
	loading: false,
	error: null,
};

const brandSlice = createSlice({
	name: "brand",
	initialState,
	reducers: {
		clearSelected(state) {
			state.selected = null;
		},
	},
	extraReducers: (builder) => {
		builder
			// loadBrands
			.addCase(loadBrands.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				loadBrands.fulfilled,
				(state, action: PayloadAction<Brand[]>) => {
					state.loading = false;
					state.items = action.payload;
				}
			)
			.addCase(loadBrands.rejected, (state, action) => {
				state.loading = false;
				state.error = (action.payload as string) ?? action.error.message ?? null;
			})
			// loadBrandById
			.addCase(loadBrandById.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				loadBrandById.fulfilled,
				(state, action: PayloadAction<Brand>) => {
					state.loading = false;
					state.selected = action.payload;
				}
			)
			.addCase(loadBrandById.rejected, (state, action) => {
				state.loading = false;
				state.error = (action.payload as string) ?? action.error.message ?? null;
			});
	},
});

export const { clearSelected } = brandSlice.actions;
export default brandSlice.reducer;

