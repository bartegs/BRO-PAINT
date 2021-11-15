import { Request, Router } from "express";
import * as multer from "multer";
import * as fs from "fs";
import AwaitingOrdersController from "../controllers/awaitingOrders";
import authenticate from "../middlewares/authenticate";

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const imageDirectoryPath = "server/userImages/";

    if (!fs.existsSync(imageDirectoryPath)) {
      fs.mkdirSync(imageDirectoryPath);
    }

    cb(null, imageDirectoryPath);
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();

    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

function fileFilter(
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  }
  cb(null, false);
}

const upload = multer({ storage, fileFilter });

router.post("/", upload.single("image"), AwaitingOrdersController.add_single);

router.get("/", authenticate, AwaitingOrdersController.get_all);

router.get(
  "/:awaitingOrderId",
  authenticate,
  AwaitingOrdersController.get_single
);

router.put(
  "/:awaitingOrderId",
  authenticate,
  upload.single("image"),
  AwaitingOrdersController.modify_single
);

router.delete(
  "/:awaitingOrderId",
  authenticate,
  AwaitingOrdersController.delete_single
);

export { router };
