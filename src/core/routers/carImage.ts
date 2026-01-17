import express from "express";
import { getCarImages } from "../controllers/searchCarImages.controller";

const carImageRouter = express.Router();

carImageRouter.get("/bing/searchimages", getCarImages);
export default carImageRouter;
