import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

const checkAuthorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Brak autoryzacji" });
  }
};

export default checkAuthorization;
