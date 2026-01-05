import express from "express";
import { getBrand, getsingleBrand } from "../controllers/brand.controller";

const brandRouter = express.Router();

brandRouter.get("/", getBrand);
brandRouter.get("/:id", getsingleBrand);
export default brandRouter;
