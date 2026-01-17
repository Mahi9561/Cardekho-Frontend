import type { Request, Response, NextFunction } from "express";
import * as carImage from "../services/searchCarImages.service";
import { ClientInputError } from "../utils/helpers/error-handler";

const firstQueryValue = (value: unknown): string | undefined => {
  if (typeof value === "string") return value;
  if (Array.isArray(value) && typeof value[0] === "string") return value[0];
  return undefined;
};

export const getCarImages = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const brand = firstQueryValue(req.query.brand) ?? req.params.brand;
    const model = firstQueryValue(req.query.model) ?? req.params.model;
    const year = firstQueryValue(req.query.year) ?? req.params.year;

    if (!brand || !model || !year) {
      throw new ClientInputError("brand, model, and year are required");
    }

    const images = await carImage.searchCarImagesGet(brand, model, year);
    return res.status(200).json(images);
  } catch (error) {
    next(error);
  }
};
