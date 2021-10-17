import { Router } from "express";
import AwaitingOrdersController from "../controllers/awaitingOrders";
import checkAuthorization from "../middlewares/checkAuthorization";

const router = Router();

router.post("/", AwaitingOrdersController.add_single);

//  add auth
router.get("/", AwaitingOrdersController.get_all);

router.get(
  "/:awaitingOrderId",
  checkAuthorization,
  AwaitingOrdersController.get_single
);

//  add auth
router.put("/:awaitingOrderId", AwaitingOrdersController.modify_single);

//  add auth
router.delete(
  "/:awaitingOrderId",
  // checkAuthorization,
  AwaitingOrdersController.delete_single
);

export { router };
