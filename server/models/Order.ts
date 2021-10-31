import * as mongoose from "mongoose";
import { awaitingOrderSchema, AwaitingOrderType } from "./AwaitingOrder";

export type OrderType = AwaitingOrderType & {
  _id: string;
  orderDetails: {
    orderNumber: number;
    repairer: {};
    stage: {
      main: { id: number; isFinished: boolean };
      sub: { id: number; isFinished: boolean };
    };
  };
};

const OrderSchema = new mongoose.Schema<OrderType>({
  ...awaitingOrderSchema.obj,
  orderDetails: {
    ...awaitingOrderSchema.obj.orderDetails,
    stage: {
      main: {
        id: { type: Number, required: true },
        isFinished: { type: Boolean, required: true },
      },
      sub: {
        id: { type: Number, required: true },
        isFinished: { type: Boolean, required: true },
      },
    },
    repairer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
  },
});

export default mongoose.model("Order", OrderSchema);
