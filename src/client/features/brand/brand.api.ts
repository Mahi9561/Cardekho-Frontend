import httpClient from "../../../core/utils/http-client";

export type Brand = {
	id: string;
	name: string;
	logoUrl?: string;
};

export const brandApi = {
	async getBrands(): Promise<Brand[]> {
		const res = await httpClient.get("/brand");
		return res.data as Brand[];
	},

	async getBrandById(id: string): Promise<Brand> {
		const res = await httpClient.get(`/brand/${id}`);
		return res.data as Brand;
	},
};
