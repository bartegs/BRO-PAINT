import { Router } from "express";
import { router as positionsRouter } from "./positions";
import { router as employeesRouter } from "./employees";
import { router as servicesRouter } from "./services";
import { router as awaitingOrdersRouter } from "./awaitingOrders";
import { router as commonsRouter } from "./commons";

const router = Router();

router.use("/positions", positionsRouter);

router.use("/employees", employeesRouter);

router.use("/services", servicesRouter);

router.use("/awaiting-orders", awaitingOrdersRouter);

router.use("/*", commonsRouter);

export default router;
