import { Router } from "express";
import AwaitingRepairsController from "../controllers/awaitingRepairs";
import checkAuthorization from "../middlewares/checkAuthorization";

const router = Router();

router.post("/", AwaitingRepairsController.add_single);

router.get("/", checkAuthorization, AwaitingRepairsController.get_all);

router.get(
  "/:awaitingOrderId",
  checkAuthorization,
  AwaitingRepairsController.get_single
);

router.put(
  "/:awaitingOrderId",
  checkAuthorization,
  AwaitingRepairsController.modify_single
);

router.delete(
  "/:awaitingOrderId",
  checkAuthorization,
  AwaitingRepairsController.delete_single
);

export { router };
