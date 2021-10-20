import { Router } from "express";
import AwaitingOrdersController from "../controllers/awaitingOrders";
import authenticate from "../middlewares/authenticate";

const router = Router();

router.post("/", AwaitingOrdersController.add_single);

router.get("/", authenticate, AwaitingOrdersController.get_all);

router.get(
  "/:awaitingOrderId",
  authenticate,
  AwaitingOrdersController.get_single
);

router.put(
  "/:awaitingOrderId",
  authenticate,
  AwaitingOrdersController.modify_single
);

router.delete(
  "/:awaitingOrderId",
  authenticate,
  AwaitingOrdersController.delete_single
);

export { router };
