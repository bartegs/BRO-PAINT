import { Router } from "express";
import ServicesController from "../controllers/services";

const router = Router();

router.get("/services", ServicesController.get_services);

router.post("/services", ServicesController.add_services);

export { router };
