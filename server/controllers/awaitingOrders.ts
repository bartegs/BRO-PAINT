import { Request, Response } from "express";
import * as mongoose from "mongoose";
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
    const awaitingOrder = new AwaitingOrder({
      _id: new mongoose.Types.ObjectId(),
      customerInfo: {
        firstName: req.body.customerInfo.firstName,
        lastName: req.body.customerInfo.lastName,
        email: req.body.customerInfo.email,
        telephone: req.body.customerInfo.telephone,
      },
      carInfo: {
        productionYear: req.body.carInfo.productionYear,
        model: req.body.carInfo.model,
        licensePlate: req.body.carInfo.licensePlate,
        paintCode: req.body.carInfo.paintCode,
      },
      orderInfo: {
        serviceType: req.body.orderInfo.serviceType,
        comments: req.body.orderInfo.comments,
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
