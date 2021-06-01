import { Request, Response } from "express";
import Position from "../models/Position";

const PositionsController = {
  get_positions: (req: Request, res: Response) => {
    Position.find({})
      .then((result) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({ message: "No positions found" });
      });
  },

  add_positions: (req: Request, res: Response) => {
    const { name } = req.body;

    const position = new Position({
      name,
    });

    position
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Position added",
          info: result,
        });
      })
      .catch((err) =>
        res.status(500).json({ message: "Position not added - error", err })
      );
  },
};

export default PositionsController;
