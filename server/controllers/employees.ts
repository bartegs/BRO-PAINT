import { Request, Response } from "express";
import * as mongoose from "mongoose";
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
    const employee = new Employee({
      _id: new mongoose.Types.ObjectId(),
      login: {
        nickName: req.body.login.nickName,
        password: req.body.login.password,
      },
      employeeInfo: {
        firstName: req.body.employeeInfo.firstName,
        lastName: req.body.employeeInfo.lastName,
        position: req.body.employeeInfo.position,
        telephone: req.body.employeeInfo.telephone,
        email: req.body.employeeInfo.email,
        pesel: req.body.employeeInfo.pesel,
        birthDate: req.body.employeeInfo.birthDate,
        accountNumber: req.body.employeeInfo.accountNumber,
        address: {
          street: req.body.employeeInfo.address.street,
          apartment: req.body.employeeInfo.address.apartment,
          city: req.body.employeeInfo.address.city,
          postalCode: req.body.employeeInfo.address.postalCode,
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
