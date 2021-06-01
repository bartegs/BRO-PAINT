import { Request, Response } from "express";
import Employee from "../models/Employee";

const EmployeesController = {
  get_employees: (req: Request, res: Response) => {
    Employee.find({})
      .then((result) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({ message: "No employees found" });
      });
  },
  add_employees: (req: Request, res: Response) => {
    const { login, employeeInfo } = req.body;

    const employee = new Employee({
      login: {
        nickName: login.nickName,
        password: login.password,
      },

      employeeInfo: {
        firstName: employeeInfo.firstName,
        lastName: employeeInfo.lastName,
        position: employeeInfo.position,
        telephone: employeeInfo.telephone,
        email: employeeInfo.email,
        pesel: employeeInfo.pesel,
        birthDate: employeeInfo.birthDate,
        accountNumber: employeeInfo.accountNumber,

        address: {
          street: employeeInfo.address.street,
          apartment: employeeInfo.address.apartment,
          city: employeeInfo.address.city,
          postalCode: employeeInfo.address.postalCode,
        },
      },
    });

    employee
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Employee added",
          info: result,
        });
      })
      .catch((err) =>
        res.status(500).json({ message: "Employee not added - error", err })
      );
  },
};

export default EmployeesController;
