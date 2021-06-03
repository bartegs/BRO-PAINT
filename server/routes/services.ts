import { Router } from "express";
import ServicesController from "../controllers/services";

const router = Router();

router.post("/", ServicesController.add_single);

router.get("/", ServicesController.get_all);

router.get("/:serviceId", ServicesController.get_single);

router.put("/:serviceId", ServicesController.modify_single);

router.delete("/:serviceId", ServicesController.delete_single);

export { router };
