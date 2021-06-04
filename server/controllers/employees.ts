import { Request, Response } from "express";
import Employee from "../models/Employee";

const EmployeesController = {
  add_single: (req: Request, res: Response) => {
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
          message: "Pracownik dodany",
          info: result,
        });
      })
      .catch(() =>
        res
          .status(500)
          .json({ message: "Nie dodano pracownika - błąd serwera" })
      );
  },

  get_all: (req: Request, res: Response) => {
    Employee.find({})
      .then((result) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({ message: "Nie znaleziono pracowników" });
      });
  },

  get_single: (req: Request, res: Response) => {
    const id = req.params.employeeId;
    Employee.findById(id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({ message: "Nie znaleziono pracownika" });
      });
  },

  modify_single: (req: Request, res: Response) => {
    const id = req.params.employeeId;
    const { login, employeeInfo } = req.body;

    Employee.findByIdAndUpdate(
      id,
      {
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
      },
      { new: true }
    )
      .then((result) => {
        res.status(200).json({
          wiadomosc: "Zmodyfikowano dane pracownika",
          info: result,
        });
      })
      .catch(() =>
        res
          .status(500)
          .json({ wiadomosc: "Nie zmodyfikowano - wystąpił błąd serwera" })
      );
  },

  delete_single: (req: Request, res: Response) => {
    const id = req.params.employeeId;

    Employee.findByIdAndRemove(id)
      .then(() => {
        res.status(200).json({ message: "Usunięto pracownika" });
      })
      .catch(() => {
        res.status(500).json({ message: "Nie usunięto - błąd serwera" });
      });
  },
};

export default EmployeesController;
