import { Router } from "express";
import EmailsController from "../controllers/emails";

const router = Router();

router.post("/", EmailsController.handle_email_sending);

export { router };
