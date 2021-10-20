import { Router } from "express";
import OrdersController from "../controllers/orders";
import authenticate from "../middlewares/authenticate";

const router = Router();

router.post("/", authenticate, OrdersController.add_single);

router.get("/", authenticate, OrdersController.get_all);

// only part of information if isn't logged
router.get("/:orderId", OrdersController.get_single);

router.put("/:orderId", authenticate, OrdersController.modify_single);

export { router };
