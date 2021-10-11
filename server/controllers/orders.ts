import { Request, Response } from "express";
import Order, { OrderType } from "../models/Order";

export type SortedOrdersType = { [key: number]: OrderType[] };

const OrdersController = {
  get_all: (req: Request, res: Response) => {
    Order.find({})
      .then((result: OrderType[]) => {
        function getSortedOrdersByStage() {
          const sortedData: SortedOrdersType = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
          };
          result.forEach((item) => {
            const stage = item.orderDetails.stage.main;
            sortedData[stage].push(item);
          });

          return sortedData;
        }

        res.status(200).send(getSortedOrdersByStage());
      })
      .catch(() => {
        res.status(404).json({ message: "Nie znaleziono zleceń" });
      });
  },

  get_single: (req: Request, res: Response) => {
    const id = req.params.orderId;

    Order.findById(id)
      .then((result: OrderType) => {
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
        comment: orderInfo.comment,
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
      .then((result: OrderType) => {
        res.status(201).json({
          message: "Zlecenie utworzono",
          info: result,
        });
      })
      .catch(() =>
        res.status(500).json({ message: "Nie dodano - bład serwera" })
      );
  },

  modify_single: (req: Request, res: Response) => {
    const id = req.params.orderId;
    const { orderDetails } = req.body;

    Order.findByIdAndUpdate(id, { orderDetails }, { new: true })
      .then((result: OrderType) => {
        res.status(200).json({
          message: "Zmodyfikowano zlecenie",
          info: result,
        });
      })
      .catch((e: Error) => res.status(500).send(e));
  },
};

export default OrdersController;
