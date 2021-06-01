import { Router } from "express";
import AwaitingOrdersController from "../controllers/awaitingOrders";

const router = Router();

router.get("/awaiting-orders", AwaitingOrdersController.get_awaiting_orders);
router.post("/awaiting-orders", AwaitingOrdersController.add_awaiting_orders);

export { router };
