import { Router } from "express";
import { CarMakesController } from "../controllers/carMakes";

const router = Router();

router.get("/", CarMakesController.get_all);

router.get("/:makeName", CarMakesController.get_single);

export { router };
