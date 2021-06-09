import { Router } from "express";
import PositionsController from "../controllers/positions";
import checkAuthorization from "../middlewares/checkAuthorization";

const router = Router();

router.post("/", checkAuthorization, PositionsController.add_single);

router.get("/", checkAuthorization, PositionsController.get_all);

router.get("/:positionId", checkAuthorization, PositionsController.get_single);

router.put(
  "/:positionId",
  checkAuthorization,
  PositionsController.modify_single
);

router.delete(
  "/:positionId",
  checkAuthorization,
  PositionsController.delete_single
);

export { router };
