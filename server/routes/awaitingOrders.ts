import { Router } from "express";
import * as multer from "multer";
import * as aws from "aws-sdk";
import * as dotenv from "dotenv";
import * as multerS3 from "multer-s3";
import authenticate from "../middlewares/authenticate";
import AwaitingOrdersController from "../controllers/awaitingOrders";

dotenv.config();

const router = Router();

const region = "eu-central-1";
const bucket = "bro-paint";
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket,
    key(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

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
  // upload.single("image"),
  AwaitingOrdersController.modify_single
);

router.delete(
  "/:awaitingOrderId",
  authenticate,
  AwaitingOrdersController.delete_single
);

export { router };
