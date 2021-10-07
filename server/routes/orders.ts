import { Router } from "express";
import OrdersController from "../controllers/orders";
import checkAuthorization from "../middlewares/checkAuthorization";

const router = Router();

router.post("/", OrdersController.add_single);

router.get("/", checkAuthorization, OrdersController.get_all);

// only part of information if isn't logged
router.get("/:orderId", OrdersController.get_single);

export { router };
