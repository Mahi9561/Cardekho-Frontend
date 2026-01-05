import type { Request, Response, NextFunction } from "express";
import * as brands from "../services/brand.service";

export const getBrand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const brand = await brands.getBrand();
    console.log(brand);
    return res.status(200).json(brand);
  } catch (error) {
    next(error);
  }
};
