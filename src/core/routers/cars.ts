import express from "express";
import { getCar, getSingleCar } from "../controllers/cars.controller";

const carsRouter = express.Router();

carsRouter.get("/getCars", getCar);
carsRouter.get("/getCars/:id", getSingleCar);
export default carsRouter;
