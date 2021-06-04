import { Request, Response } from "express";
import Position from "../models/Position";

const PositionsController = {
  add_single: (req: Request, res: Response) => {
    const { name } = req.body;

    const position = new Position({
      name,
    });

    position
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Stanowisko dodane",
          info: result,
        });
      })
      .catch(() =>
        res
          .status(500)
          .json({ message: "Nie dodano stanowiska - błąd serwera" })
      );
  },

  get_all: (req: Request, res: Response) => {
    Position.find({})
      .then((result) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({ message: "Nie znaleziono stanowisk" });
      });
  },

  get_single: (req: Request, res: Response) => {
    const id = req.params.positionId;
    Position.findById(id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(404).json({ message: "Nie znaleziono stanowiska" });
      });
  },

  modify_single: (req: Request, res: Response) => {
    const id = req.params.positionId;
    const { name } = req.body;

    Position.findByIdAndUpdate(
      id,
      {
        name,
      },
      { new: true }
    )
      .then((result) => {
        res.status(200).json({
          wiadomosc: "Zmodyfikowano stanowisko",
          info: result,
        });
      })
      .catch(() =>
        res
          .status(500)
          .json({ wiadomosc: "Nie zmodyfikowano - wystąpił błąd serwera" })
      );
  },

  delete_single: (req: Request, res: Response) => {
    const id = req.params.positionId;

    Position.findByIdAndRemove(id)
      .then(() => {
        res.status(200).json({ message: "Usunięto stanowisko" });
      })
      .catch(() => {
        res.status(500).json({ message: "Nie usunięto - błąd serwera" });
      });
  },
};

export default PositionsController;
