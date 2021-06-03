import { Router } from "express";
import EmployeesController from "../controllers/employees";

const router = Router();

router.post("/", EmployeesController.add_single);

router.get("/", EmployeesController.get_all);

router.get("/:employeeId", EmployeesController.get_single);

router.put("/:employeeId", EmployeesController.modify_single);

router.delete("/:employeeId", EmployeesController.delete_single);

export { router };
