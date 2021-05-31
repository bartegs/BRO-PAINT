import * as mongoose from "mongoose";

const awaitingOrderSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  customerInfo: {
    firstName: {
      type: String,
      required: true,
      min: 2,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
    },
    email: {
      type: String,
      required: true,
      min: 5,
    },
    telephone: {
      type: String,
      required: true,
      min: 9,
    },
  },
  carInfo: {
    productionYear: {
      type: Number,
      required: true,
      min: 4,
    },
    model: {
      type: String,
      required: true,
      min: 1,
    },
    licensePlate: {
      type: String,
      required: true,
      min: 5,
    },
    paintCode: {
      type: String,
      required: false,
      min: 1,
    },
  },
  orderInfo: {
    serviceType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    comments: {
      type: String,
      required: false,
      min: 1,
    },
  },
});

export default mongoose.model("AwaitingOrder", awaitingOrderSchema);
