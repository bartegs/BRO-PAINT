import { Router } from "express";
import CommonsController from "../controllers/commons";

const router = Router();

router.get("/*", CommonsController.handle_wrong_path);

export { router };
