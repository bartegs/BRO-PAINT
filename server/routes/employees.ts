import { Router } from "express";
import EmployeesController from "../controllers/employees";
import authenticate from "../middlewares/authenticate";

const router = Router();

router.post("/", authenticate, EmployeesController.add_single);

router.get("/", authenticate, EmployeesController.get_all);

router.get("/test", authenticate, EmployeesController.get_general_list);

router.get("/:employeeId", authenticate, EmployeesController.get_single);

router.put("/:employeeId", authenticate, EmployeesController.modify_single);

router.delete("/:employeeId", authenticate, EmployeesController.delete_single);

router.post("/login", EmployeesController.login);

export { router };
