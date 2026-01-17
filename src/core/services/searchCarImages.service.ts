import { handleError } from "../middlewares/error-handle-middleware";
import httpClient from "../utils/http-client";

export const searchCarImagesGet = async (
  brand: string,
  model: string,
  year: string,
) => {
  try {
    const response = await httpClient.get(`image/bing/searchimages`, {
      params: { brand, model, year },
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching car images:",
      error.response?.data || error.message,
    );
    handleError(error);
  }
};
