import httpClient from "../../../core/utils/http-client";

export type Car = {
  id: string;
  model: string;
  brand: string;
  price?: number;
  transmission?: string;
  fuelType?: string;
  bodyType?: string;
};

export type CarFilters = {
  model?: string;
  transmission?: string;
  fuelType?: string;
  bodyType?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
};

export const carApi = {
  async getCars(filters: CarFilters = {}): Promise<Car[]> {
    const res = await httpClient.get("/cars/getCars", { params: filters });
    return res.data as Car[];
  },

  async getCarById(id: string): Promise<Car> {
    const res = await httpClient.get(`/cars/getCars/${id}`);
    return res.data as Car;
  },
};
