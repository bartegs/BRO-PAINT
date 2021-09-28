import { Router } from "express";
import RepairsController from "../controllers/repairs";
import checkAuthorization from "../middlewares/checkAuthorization";

const router = Router();

router.post("/", RepairsController.add_single);

router.get("/", checkAuthorization, RepairsController.get_all);

// only part of information if isn't logged
router.get("/:repairId", RepairsController.get_single);

export { router };
