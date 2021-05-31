import { Router } from "express";
import EmployeesController from "../controllers/employees";

const router = Router();

router.get("/employees", EmployeesController.get_employees);

router.post("/employees", EmployeesController.add_employees);

export { router };
