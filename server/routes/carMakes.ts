import { Router } from "express";
import { CarMakesController } from "../controllers/carMakes";

const router = Router();

router.get("/", CarMakesController.getAll);

export { router };
