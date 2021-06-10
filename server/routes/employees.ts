import { Router } from "express";
import EmployeesController from "../controllers/employees";
import checkAuthorization from "../middlewares/checkAuthorization";

const router = Router();

router.post("/", checkAuthorization, EmployeesController.add_single);

router.get("/", checkAuthorization, EmployeesController.get_all);

router.get("/:employeeId", checkAuthorization, EmployeesController.get_single);

router.put(
  "/:employeeId",
  checkAuthorization,
  EmployeesController.modify_single
);

router.delete(
  "/:employeeId",
  checkAuthorization,
  EmployeesController.delete_single
);

router.post("/login", EmployeesController.login);

export { router };
