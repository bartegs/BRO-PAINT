import { Request, Response } from "express";
import Order from "../models/Order";
import Position from "../models/Position";

const OrdersController = {
  get_all: (req: Request, res: Response) => {
    Position.find({})
      .then((result: any) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({ message: "Nie znaleziono zleceń" });
      });
  },

  get_single: (req: Request, res: Response) => {
    const id = req.params.orderId;

    Order.findById(id)
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
    const { customerInfo, carInfo, orderInfo, orderDetails } = req.body;

    const order = new Order({
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

      orderDetails: {
        repairer: orderDetails.repairer,
        stage: {
          main: orderDetails.orderMainStage,
          sub: orderDetails.orderSubStage,
        },
      },
    });

    order
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Zlecenie utworzono",
          info: result,
        });
      })
      .catch(() =>
        res.status(500).json({ message: "Nie dodano - bład serwera" })
      );
  },
};

export default OrdersController;
