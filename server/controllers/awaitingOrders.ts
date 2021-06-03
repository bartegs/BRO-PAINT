import { Request, Response } from "express";
import AwaitingOrder from "../models/AwaitingOrder";

const AwaitingOrdersController = {
  get_all: (req: Request, res: Response) => {
    AwaitingOrder.find({})
      .then((result) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({ message: "Brak oczekujących zleceń" });
      });
  },

  get_single: (req: Request, res: Response) => {
    const id = req.params.awaitingOrderId;
    AwaitingOrder.findById(id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({
          message: "Nie znaleziono oczekującego zlecenia o podanym numerze ID",
        });
      });
  },

  add_single: (req: Request, res: Response) => {
    const { customerInfo, carInfo, orderInfo } = req.body;

    const awaitingOrder = new AwaitingOrder({
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
    });

    awaitingOrder
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Zlecenie przyjęte do oczekujących.",
          info: result,
        });
      })
      .catch(() =>
        res.status(500).json({ message: "Nie dodano - bład serwera" })
      );
  },

  modify_single: (req: Request, res: Response) => {
    const id = req.params.awaitingOrderId;
    const { customerInfo, carInfo, orderInfo } = req.body;

    AwaitingOrder.findByIdAndUpdate(
      id,
      {
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
      },
      { new: true }
    )
      .then((result) => {
        res.status(200).json({
          wiadomosc: "Zmodyfikowano oczekujące zlecenie",
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
    const id = req.params.awaitingOrderId;

    AwaitingOrder.findByIdAndRemove(id)
      .then(() => {
        res.status(200).json({ message: "Usunięto oczekujące zlecenie" });
      })
      .catch(() => {
        res.status(500).json({ message: "Nie usunięto - błąd serwera" });
      });
  },
};

export default AwaitingOrdersController;
