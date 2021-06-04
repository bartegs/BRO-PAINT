import { Request, Response } from "express";

const CommonsController = {
  handle_wrong_path: (req: Request, res: Response) => {
    res.status(404).json({ wiadomosc: "Nie odnaleziono niczego" });
  },
};

export default CommonsController;
