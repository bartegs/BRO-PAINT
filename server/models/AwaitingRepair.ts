import * as mongoose from "mongoose";

export const awaitingRepairSchema = new mongoose.Schema({
  customerInfo: {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      min: 3,
      max: 254,
    },
    telephone: {
      type: String,
      required: true,
      min: 9,
      max: 15,
    },
  },
  carInfo: {
    productionYear: {
      type: Date,
      required: true,
    },
    model: {
      type: String,
      required: true,
      min: 1,
      max: 100,
    },
    licensePlate: {
      type: String,
      required: true,
      min: 4,
      max: 20,
    },
    paintCode: {
      type: String,
      required: false,
      min: 1,
      max: 50,
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
      max: 1000,
    },
  },
});

export default mongoose.model("AwaitingRepair", awaitingRepairSchema);
