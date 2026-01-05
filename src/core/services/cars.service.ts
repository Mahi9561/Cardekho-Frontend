import { handleError } from "../middlewares/error-handle-middleware";
import httpClient from "../utils/http-client";

export type CarFilters = {
  model?: string;
  transmission?: string;
  fuelType?: string;
  bodyType?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
};

export const getCars = async (filters: CarFilters = {}) => {
  try {
    const cars = await httpClient.get("/cars/getAllCars", {
      params: filters,
    });
    return cars.data;
  } catch (error: any) {
    console.error(
      "Error fetching cars data:",
      error.response?.data || error.message
    );
    handleError(error);
  }
};

export const getSingleCar = async (id: string) => {
  try {
    const singleCar = await httpClient.get(`/cars/${id}`);
    console.log(singleCar);
    return singleCar.data;
  } catch (error: any) {
    console.error(
      "Error fetching brand data:",
      error.response?.data || error.message
    );
    handleError(error);
  }
};
