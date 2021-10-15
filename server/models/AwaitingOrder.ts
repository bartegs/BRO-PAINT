import * as mongoose from "mongoose";

export interface AwaitingOrderType {
  customerInfo: {
    names: string;
    email: string;
    phone: string;
  };
  carInfo: {
    productionYear: Date;
    make: string;
    model: string;
    licencePlate: string;
    paintCode: string;
  };
  orderInfo: {
    service: string;
    comment: string;
  };

  orderDetails: {
    orderNumber: number;
  };
}

export const awaitingOrderSchema = new mongoose.Schema<AwaitingOrderType>({
  customerInfo: {
    names: {
      type: String,
      required: true,
      min: 5,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      min: 3,
      max: 254,
    },
    phone: {
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
    make: {
      type: String,
      required: true,
      min: 1,
      max: 100,
    },
    model: {
      type: String,
      required: true,
      min: 1,
      max: 100,
    },
    licencePlate: {
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
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    comment: {
      type: String,
      required: false,
      min: 1,
      max: 1000,
    },
  },
});

export default mongoose.model("AwaitingOrder", awaitingOrderSchema);
