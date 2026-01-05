import { handleError } from "../middlewares/error-handle-middleware";
import httpClient from "../utils/http-client";

export const getBrand = async () => {
  try {
    const brand = await httpClient.get("/cars/getAllCars");
    console.log(brand);
    return brand.data;
  } catch (error: any) {
    console.error(
      "Error fetching brand data:",
      error.response?.data || error.message
    );
    handleError(error);
  }
};

export const getsingleBrand = async (id: string) => {
  try {
    const singleBrand = await httpClient.get(`/brand/getbrand/${id}`);
    console.log(singleBrand);
    return singleBrand.data;
  } catch (error: any) {
    console.error(
      "Error fetching brand data:",
      error.response?.data || error.message
    );
    handleError(error);
  }
};
