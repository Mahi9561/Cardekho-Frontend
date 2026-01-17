import axios from "axios";

export type Car = {
  bootspace_litres?: number;
  brand_name?: string;
  engine_cc?: number;
  fuel_type?: string;
  id?: string;
  launch_year?: string;
  mileage_kmpl?: number;
  model_name?: number;
  price?: number;
  safety_rating?: number;
  seating_capacity?: number;
  transmission?: string;
  variant_name?: string;
  
};

export type CarFilters = {
  id?: string;
  model?: string;
  transmission?: string;
  fuel_type?: string;
  bodyType?: string;
  brand?: string;
  price_min?: number;
  price_max?: number;
};

export function getCars(filters: CarFilters) {
  return axios.get(`/api/cars/getCars`, {
    params: filters,
  });
}

export function getCarById(id: string) {
  return axios.get(`/api/cars/getCars/${id}`);
}

export function getCarImages(brand: string, model: string, year?: string) {
  return axios.get(`/api/image/bing/searchimages`, {
    params: { brand, model, year },
  });
}
