import { Router } from "express";
import { router as repairsRouter } from "./repairs";
import { router as positionsRouter } from "./positions";
import { router as employeesRouter } from "./employees";
import { router as servicesRouter } from "./services";
import { router as awaitingRepairsRouter } from "./awaitingRepairs";
import { router as commonsRouter } from "./commons";

const router = Router();

router.use("/repairs", repairsRouter);

router.use("/positions", positionsRouter);

router.use("/employees", employeesRouter);

router.use("/services", servicesRouter);

router.use("/awaiting-repairs", awaitingRepairsRouter);

router.use("/*", commonsRouter);

export default router;
