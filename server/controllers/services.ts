import { Request, Response } from "express";
import Service from "../models/service";

const ServicesController = {
  get_services: (req: Request, res: Response) => {
    Service.find({})
      .then((result) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({ message: "No services found" });
      });
  },

  add_services: (req: Request, res: Response) => {
    const { name } = req.body;

    const service = new Service({
      name,
    });

    service
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Service added",
          info: result,
        });
      })
      .catch((err) =>
        res.status(500).json({ message: "Service not added - error", err })
      );
  },
};

export default ServicesController;
