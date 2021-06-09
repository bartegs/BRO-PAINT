import { Router } from "express";
import ServicesController from "../controllers/services";
import checkAuthorization from "../middlewares/checkAuthorization";

const router = Router();

router.post("/", checkAuthorization, ServicesController.add_single);

router.get("/", ServicesController.get_all);

router.get("/:serviceId", ServicesController.get_single);

router.put("/:serviceId", checkAuthorization, ServicesController.modify_single);

router.delete(
  "/:serviceId",
  checkAuthorization,
  ServicesController.delete_single
);

export { router };
