import { Router } from "express";
import EmployeesController from "../controllers/employees";
import checkAuthorization from "../middlewares/checkAuthorization";

const router = Router();

router.post("/", EmployeesController.add_single);

router.get("/", EmployeesController.get_all);

router.get("/:employeeId", checkAuthorization, EmployeesController.get_single);

router.put("/:employeeId", EmployeesController.modify_single);

router.delete("/:employeeId", EmployeesController.delete_single);

router.post("/login", EmployeesController.login);

export { router };
