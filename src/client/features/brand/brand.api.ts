import axios from "axios";

export type Brand = {
  brand_id: string;
  name: string;
  // Support both backend snake_case and frontend camelCase
  logo_url?: string;
  logoUrl?: string;
};

export function brandApi() {
  return axios.get(`/api/brand`);
}

export function getBrandById(id: string) {
  return axios.get(`/api/brand/${id}`);
}
