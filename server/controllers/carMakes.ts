import { Request, Response } from "express";
import CarMakes from "../models/CarMakes";

export const CarMakesController = {
  get_all: (req: Request, res: Response) => {
    CarMakes.find({})
      .sort("name")
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => {
        res.status(404).json({ message: "Nie znaleziono marek" });
      });
  },

  get_single: (req: Request, res: Response) => {
    const { makeName } = req.params;

    CarMakes.findOne({ name: makeName })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => {
        res.status(404).json({ message: "Nie znaleziono marki" });
      });
  },
};
