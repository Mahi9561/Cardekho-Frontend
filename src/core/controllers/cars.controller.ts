import type { Request, Response, NextFunction } from "express";
import * as cars from "../services/cars.service";

export const getCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filters = req.query as cars.CarFilters;
    const car = await cars.getCars(filters);
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
};

export const getSingleCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const singleCar = await cars.getSingleCar(id);
    return res.status(200).json(singleCar);
  } catch (error) {
    next(error);
  }
};
