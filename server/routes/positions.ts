import { Router } from "express";
import PositionsController from "../controllers/positions";

const router = Router();

router.post("/", PositionsController.add_single);

router.get("/", PositionsController.get_all);

router.get("/:positionId", PositionsController.get_single);

router.put("/:positionId", PositionsController.modify_single);

router.delete("/:positionId", PositionsController.delete_single);

export { router };
