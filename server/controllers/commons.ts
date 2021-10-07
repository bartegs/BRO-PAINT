import { resolve, join } from "path";
import type { Request, Response } from "express";

const CommonsController = {
  handle_wrong_path: (req: Request, res: Response) => {
    const appsRoot = resolve(process.cwd(), "dist/apps/");
    const { originalUrl } = req;

    if (originalUrl.includes("pracownik")) {
      res.status(404).sendFile(join(appsRoot, "employee", "index.html"));
    } else {
      res.status(404).sendFile(join(appsRoot, "client", "index.html"));
    }
  },
};

export default CommonsController;
