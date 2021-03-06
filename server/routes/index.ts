import { Router } from "express";
import { router as ordersRouter } from "./orders";
import { router as positionsRouter } from "./positions";
import { router as employeesRouter } from "./employees";
import { router as servicesRouter } from "./services";
import { router as awaitingOrdersRouter } from "./awaitingOrders";
import { router as commonsRouter } from "./commons";
import { router as emailsRouter } from "./emails";
import { router as carMakesRouter } from "./carMakes";

const router = Router();

router.use("/emails", emailsRouter);

router.use("/car-makes", carMakesRouter);

router.use("/orders", ordersRouter);

router.use("/positions", positionsRouter);

router.use("/employees", employeesRouter);

router.use("/services", servicesRouter);

router.use("/awaiting-orders", awaitingOrdersRouter);

router.use("/*", commonsRouter);

export default router;
