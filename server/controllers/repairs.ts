import { Request, Response } from "express";
import Repair from "../models/Repair";
import Position from "../models/Position";

const RepairsController = {
  get_all: (req: Request, res: Response) => {
    Position.find({})
      .then((result: any) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({ message: "Nie znaleziono napraw" });
      });
  },

  get_single: (req: Request, res: Response) => {
    const id = req.params.repairId;

    Repair.findById(id)
      .then((result: any) => {
        // console.log(result);
        res.status(200).send(result);
      })
      .catch(() => {
        res.statusMessage = "miki z tym";
        res.status(404).send({
          message: "Nie znaleziono naprawy",
        });
      });
  },

  add_single: (req: Request, res: Response) => {
    const { customerInfo, carInfo, orderInfo, repairDetails } = req.body;

    const repair = new Repair({
      customerInfo: {
        firstName: customerInfo.firstName,
        lastName: customerInfo.lastName,
        email: customerInfo.email,
        telephone: customerInfo.telephone,
      },

      carInfo: {
        productionYear: carInfo.productionYear,
        model: carInfo.model,
        licensePlate: carInfo.licensePlate,
        paintCode: carInfo.paintCode,
      },

      orderInfo: {
        serviceType: orderInfo.serviceType,
        comments: orderInfo.comments,
      },

      repairDetails: {
        repairer: repairDetails.repairer,
        stage: {
          main: repairDetails.repairMainStage,
          sub: repairDetails.repairSubStage,
        },
      },
    });

    repair
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Naprawa utworzona",
          info: result,
        });
      })
      .catch(() =>
        res.status(500).json({ message: "Nie dodano - bład serwera" })
      );
  },
};

export default RepairsController;
