import { handleError } from "../middlewares/error-handle-middleware";
import httpClient from "../utils/http-client";

/**
 * Get brands from external API
 * @param token - Optional JWT token to forward to the API
 */
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
