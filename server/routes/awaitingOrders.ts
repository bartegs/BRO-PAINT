import { Router } from "express";
import AwaitingOrdersController from "../controllers/awaitingOrders";

const router = Router();

router.post("/", AwaitingOrdersController.add_single);

router.get("/", AwaitingOrdersController.get_all);

router.get("/:awaitingOrderId", AwaitingOrdersController.get_single);

router.put("/:awaitingOrderId", AwaitingOrdersController.modify_single);

router.delete("/:awaitingOrderId", AwaitingOrdersController.delete_single);

export { router };
