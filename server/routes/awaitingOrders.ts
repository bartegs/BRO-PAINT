import { Router } from "express";
import AwaitingOrdersController from "../controllers/awaitingOrders";
import checkAuthorization from "../middlewares/checkAuthorization";

const router = Router();

router.post("/", AwaitingOrdersController.add_single);

router.get("/", checkAuthorization, AwaitingOrdersController.get_all);

router.get(
  "/:awaitingOrderId",
  checkAuthorization,
  AwaitingOrdersController.get_single
);

router.put(
  "/:awaitingOrderId",
  checkAuthorization,
  AwaitingOrdersController.modify_single
);

router.delete(
  "/:awaitingOrderId",
  checkAuthorization,
  AwaitingOrdersController.delete_single
);

export { router };
