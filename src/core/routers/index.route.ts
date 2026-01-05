import express from "express";
import brandRouter from "./brand";
import carRouter from "./cars";
const router = express.Router();

router.use("/brand", brandRouter);
router.use("/cars", carRouter);

export default router;
