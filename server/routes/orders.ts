import { Router } from "express";
import OrdersController from "../controllers/orders";
import checkAuthorization from "../middlewares/checkAuthorization";

const router = Router();

// add auth
router.post("/", OrdersController.add_single);

// add auth
router.get("/", OrdersController.get_all);

// only part of information if isn't logged
router.get("/:orderId", OrdersController.get_single);

export { router };
