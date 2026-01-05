import express from "express";
import { getBrand } from "../controllers/brand.controller";

const brandRouter = express.Router();

brandRouter.get("/", getBrand);
export default brandRouter;
