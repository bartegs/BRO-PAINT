import { Request, Response } from "express";
import AwaitingOrder from "../models/AwaitingOrder";

const AwaitingOrdersController = {
  get_awaiting_orders: (req: Request, res: Response) => {
    AwaitingOrder.find({})
      .then((result) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({ message: "No employees found" });
      });
  },

  add_awaiting_orders: (req: Request, res: Response) => {
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
          message: "Awaiting order added",
          info: result,
        });
      })
      .catch((err) =>
        res
          .status(500)
          .json({ message: "Awaiting order not added - error", err })
      );
  },
};

export default AwaitingOrdersController;
