import express from "express";
import { getCar } from "../controllers/cars.controller";

const carsRouter = express.Router();

carsRouter.get("/getCars", getCar);
export default carsRouter;
