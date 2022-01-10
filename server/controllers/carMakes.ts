import { Request, Response } from "express";
import CarMakes from "../models/CarMakes";

export const CarMakesController = {
  getAll: (req: Request, res: Response) => {
    CarMakes.find({})
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => {
        res.status(404).json({ message: "Nie znaleziono" });
      });
  },
};
