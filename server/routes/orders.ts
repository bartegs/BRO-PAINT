import { Router } from "express";
import ordersController from "../controllers/orders";
import checkAuthorization from "../middlewares/checkAuthorization";

const router = Router();

router.post("/", ordersController.add_single);

router.get("/", checkAuthorization, ordersController.get_all);

// only part of information if isn't logged
router.get("/:orderId", ordersController.get_single);

export { router };
