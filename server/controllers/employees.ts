import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import Employee from "../models/Employee";

const EmployeesController = {
  add_single: async (req: Request, res: Response) => {
    const { login, employeeInfo, role } = req.body;

    const hashed = await bcrypt.hash(login.password, 10);
    const employee = new Employee({
      role,
      login: {
        nickName: login.nickName,
        password: hashed,
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

  get_general_list: (req: Request, res: Response) => {
    Employee.find(
      {},
      {
        employeeInfo: {
          firstName: 1,
          lastName: 1,
          email: 1,
          phone: 1,
          position: 1,
        },
      }
    ).then((result) => {
      res.status(200).send(result);
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
          phone: employeeInfo.phone,
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
          message: "Zmodyfikowano dane pracownika",
          info: result,
        });
      })
      .catch(() =>
        res
          .status(500)
          .json({ message: "Nie zmodyfikowano - wystąpił błąd serwera" })
      );
  },

  delete_single: (req: Request, res: Response) => {
    const id = req.params.employeeId;

    Employee.findByIdAndRemove(id)
      .then(() => {
        res.status(200).json({ message: "Usunięto pracownika" });
      })
      .catch(() => {
        res.status(400).json({ message: "Nie usunięto - błąd serwera" });
      });
  },

  login: (req: Request, res: Response) => {
    if (req.body.login) {
      const { nickName, password } = req.body.login;

      // searching for matching employee
      Employee.findOne({ "login.nickName": nickName }).then((employee) => {
        if (employee) {
          bcrypt.compare(password, employee.login.password).then((result) => {
            if (result) {
              // generate JWT if user exists
              const token = jwt.sign(
                { nickName: employee.login.nickName },
                process.env.SECRET,
                { expiresIn: "1h" }
              );

              res.status(200).json({
                message: "Zalogowano pomyślnie",
                token,
                role: employee.role,
                id: employee.id,
              });
            } else {
              res.status(403).json({ message: "Niepoprawne dane logowania" });
            }
          });
        } else {
          res.status(403).json({ message: "Niepoprawne dane logowania" });
        }
      });
    } else if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];

      jwt.verify(token, process.env.SECRET, (error) => {
        if (error) {
          return res.status(403).json({ message: "Brak autoryzacji" });
        }

        return res.status(200).json({ message: "Autoryzacja powiodła się" });
      });
    } else {
      res.status(400).json({ message: "nie podano danych" });
    }
  },
};

export default EmployeesController;
