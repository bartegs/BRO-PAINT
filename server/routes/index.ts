import { Router } from "express";
import { router as positionsRouter } from "./positions";
import { router as employeesRouter } from "./employees";
import { router as servicesRouter } from "./services";
import { router as awaitingOrdersRouter } from "./awaitingOrders";

const router = Router();

router.use(positionsRouter);
router.use(employeesRouter);
router.use(servicesRouter);
router.use(awaitingOrdersRouter);

export default router;
