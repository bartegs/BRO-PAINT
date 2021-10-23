import { Router } from "express";
import PositionsController from "../controllers/positions";
import authenticate from "../middlewares/authenticate";

const router = Router();

router.post("/", authenticate, PositionsController.add_single);

router.get("/", authenticate, PositionsController.get_all);

router.get("/:positionId", authenticate, PositionsController.get_single);

router.put("/:positionId", authenticate, PositionsController.modify_single);

router.delete("/:positionId", authenticate, PositionsController.delete_single);

export { router };
