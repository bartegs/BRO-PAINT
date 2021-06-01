import { Router } from "express";
import PositionsController from "../controllers/positions";

const router = Router();

router.get("/positions", PositionsController.get_positions);
router.post("/positions", PositionsController.add_positions);

export { router };
