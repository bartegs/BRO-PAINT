import { Router } from "express";
import ServicesController from "../controllers/services";
import authenticate from "../middlewares/authenticate";

const router = Router();

router.post("/", authenticate, ServicesController.add_single);

router.get("/", authenticate, ServicesController.get_all);

router.get("/:serviceId", authenticate, ServicesController.get_single);

router.put("/:serviceId", authenticate, ServicesController.modify_single);

router.delete("/:serviceId", authenticate, ServicesController.delete_single);

export { router };
