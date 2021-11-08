import { Request, Response } from "express";
import AwaitingOrder, { AwaitingOrderType } from "../models/AwaitingOrder";
import Service, { ServiceType } from "../models/Service";
import Order, { OrderType } from "../models/Order";
import { sendMail } from "../utils/mail";

export type SortedAwaitingOrdersType = {
  [key: string]: AwaitingOrderType[];
};

const AwaitingOrdersController = {
  get_all: (req: Request, res: Response) => {
    AwaitingOrder.find({}).then((result: AwaitingOrderType[]) => {
      Service.find({})
        .then((services: ServiceType[]) => {
          function getSortedAwaitingOrders() {
            const sortedAwaitingOrdersByService: SortedAwaitingOrdersType = {};

            services.forEach((service) => {
              sortedAwaitingOrdersByService[service._id] = [];
            });

            result.forEach((item) => {
              const serviceId = item.orderInfo.service;
              sortedAwaitingOrdersByService[serviceId].push(item);
            });

            return sortedAwaitingOrdersByService;
          }

          res.status(200).send(getSortedAwaitingOrders());
        })
        .catch(() => {
          res.status(404).json({ message: "Brak oczekujących zleceń" });
        });
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

    Order.countDocuments({}).then((orderNumber: number) => {
      AwaitingOrder.countDocuments({}).then((awaitingOrderNumber: number) => {
        Service.findOne({ name: serviceName })
          .then((orderType: OrderType) => {
            if (orderType) {
              const orderTypeId = orderType._id;
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
                orderDetails: {
                  orderNumber: orderNumber + awaitingOrderNumber + 1,
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
                .catch((error: Error) =>
                  res.status(500).json({ message: error })
                );
            } else {
              throw Error("Zlecenie nieprzyjęte");
            }
          })
          .catch((error: Error) => res.status(500).json({ message: error }));
      });
    });
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
    const shouldMoveToOrders = req.query.moveToOrders;

    AwaitingOrder.findByIdAndRemove(id)
      .then((result: any) => {
        if (shouldMoveToOrders) {
          const newOrder = {
            ...result._doc,
            orderDetails: {
              ...result._doc.orderDetails,
              stage: {
                main: { id: 0, isFinished: false },
                sub: { id: 0, isFinished: false },
              },
            },
          };

          const order = new Order(newOrder);

          order
            .save()
            .then((addedOrder: OrderType) => {
              const { _id: addedOrderId, customerInfo } = addedOrder;
              const { email, names } = customerInfo;

              res.status(200).json({ message: "Przeniesiono do zleceń" });

              sendMail(names, email, "", addedOrderId).catch((error) =>
                console.log(error)
              );
            })
            .catch(() => {
              res
                .status(500)
                .json({ message: "Nie przeniesiono błąd serwera" });
            });
        } else {
          res.status(200).json({ message: "Usunięto oczekujące zlecenie" });
        }
      })
      .catch(() => {
        res.status(500).json({ message: "Nie usunięto - błąd serwera" });
      });
  },
};

export default AwaitingOrdersController;
