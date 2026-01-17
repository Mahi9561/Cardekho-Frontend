import express from "express";
import brandRouter from "./brand";
import carRouter from "./cars";
import carImageRouter from "./carImage";
const router = express.Router();

router.use("/brand", brandRouter);
router.use("/cars", carRouter);
router.use("/image", carImageRouter);

export default router;
