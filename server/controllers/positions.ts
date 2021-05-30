import { Request, Response } from "express";
import * as mongoose from "mongoose";
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
    const position = new Position({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
    });
    position
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Position added",
          info: result,
        });
      })
      .catch(() =>
        res.status(500).json({ message: "Position not added - error" })
      );
  },
};

export default PositionsController;
