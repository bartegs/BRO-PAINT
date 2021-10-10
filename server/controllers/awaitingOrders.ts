import { Request, Response } from "express";
import AwaitingOrder, { AwaitingOrderType } from "../models/AwaitingOrder";
import Service from "../models/Service";

const AwaitingOrdersController = {
  get_all: (req: Request, res: Response) => {
    AwaitingOrder.find({})
      .then((result: AwaitingOrderType[]) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({ message: "Brak oczekujących zleceń" });
      });
  },

  get_single: (req: Request, res: Response) => {
    const id = req.params.awaitingOrderId;
    AwaitingOrder.findById(id)
      .then((result: AwaitingOrderType) => {
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
    const { serviceName } = orderInfo;

    Service.findOne({ name: serviceName })
      .then((orderType: any) => {
        if (orderType) {
          const orderTypeId = orderType.id;
          const awaitingOrder = new AwaitingOrder({
            customerInfo: {
              names: customerInfo.names,
              email: customerInfo.email,
              phone: customerInfo.phone,
            },

            carInfo: {
              productionYear: carInfo.productionYear,
              make: carInfo.make,
              model: carInfo.model,
              licencePlate: carInfo.licencePlate,
              paintCode: carInfo.paintCode,
            },

            orderInfo: {
              service: orderTypeId,
              comment: orderInfo.comment,
            },
          });

          awaitingOrder
            .save()
            .then((result: AwaitingOrderType) => {
              res.status(201).json({
                message: "Zlecenie przyjęte do oczekujących.",
                info: result,
              });
            })
            .catch((error: Error) => res.status(500).json({ message: error }));
        } else {
          throw Error("Zlecenie nieprzyjęte");
        }
      })
      .catch((error: Error) => res.status(500).json({ message: error }));
  },

  modify_single: (req: Request, res: Response) => {
    const id = req.params.awaitingOrderId;
    const { customerInfo, carInfo, orderInfo } = req.body;

    AwaitingOrder.findByIdAndUpdate(
      id,
      {
        customerInfo: {
          names: customerInfo.names,
          email: customerInfo.email,
          phone: customerInfo.phone,
        },

        carInfo: {
          productionYear: carInfo.productionYear,
          make: carInfo.make,
          model: carInfo.model,
          licencePlate: carInfo.licencePlate,
          paintCode: carInfo.paintCode,
        },

        orderInfo: {
          service: orderInfo.serviceName,
          comment: orderInfo.comment,
        },
      },
      { new: true }
    )
      .then((result: AwaitingOrderType) => {
        res.status(200).json({
          message: "Zmodyfikowano oczekujące zlecenie",
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
