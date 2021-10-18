import { Request, Response } from "express";

import Service, { ServiceType } from "../models/Service";

const ServicesController = {
  add_single: (req: Request, res: Response) => {
    const { name } = req.body;

    const service = new Service({
      name,
    });

    service
      .save()
      .then((result: ServiceType) => {
        res.status(201).json({
          message: "Usługa dodana",
          info: result,
        });
      })
      .catch(() =>
        res.status(500).json({ message: "Nie dodano usługi - błąd serwera" })
      );
  },

  get_all: (req: Request, res: Response) => {
    Service.find({})
      .then((result: ServiceType[]) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({ message: "Nie znaleziono usług" });
      });
  },

  get_single: (req: Request, res: Response) => {
    const id = req.params.serviceId;

    Service.findById(id)
      .then((result: any) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({ message: "Nie znaleziono usługi" });
      });
  },

  modify_single: (req: Request, res: Response) => {
    const id = req.params.serviceId;
    const { name } = req.body;

    Service.findByIdAndUpdate(
      id,
      {
        name,
      },
      { new: true }
    )
      .then((result: any) => {
        res.status(200).json({
          wiadomosc: "Zmodyfikowano usługę",
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
    const id = req.params.serviceId;

    Service.findByIdAndRemove(id)
      .then(() => {
        res.status(200).json({ message: "Usunięto usługę" });
      })
      .catch(() => {
        res.status(500).json({ message: "Nie usunięto - błąd serwera" });
      });
  },
};

export default ServicesController;
