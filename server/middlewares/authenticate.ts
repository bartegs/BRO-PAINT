import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    res.sendStatus(401);
    return;
  }

  jwt.verify(token, process.env.SECRET, (error) => {
    if (error) {
      res.status(403).json({ message: "Brak autentyfikacji" });
      return;
    }

    next();
  });
};

export default authenticate;
