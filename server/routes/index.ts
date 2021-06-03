import { Router } from "express";
import { router as positionsRouter } from "./positions";
import { router as employeesRouter } from "./employees";
import { router as servicesRouter } from "./services";
import { router as awaitingOrdersRouter } from "./awaitingOrders";

const router = Router();

router.use("/positions", positionsRouter);
router.use("/employees", employeesRouter);
router.use("/services", servicesRouter);
router.use("/awaiting-orders", awaitingOrdersRouter);

export default router;
