import { Router } from "express";
import { router as positionsRouter } from "./positions";

const router = Router();

router.use(positionsRouter);

export default router;
