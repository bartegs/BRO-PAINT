import * as mongoose from "mongoose";
import { awaitingOrderSchema, AwaitingOrderType } from "./AwaitingOrder";

export type OrderType = AwaitingOrderType & {
  _id: string;
  orderDetails: {
    orderNumber: number;
    repairer: {};
    stage: {
      main: number;
      sub: number;
    };
  };
};

const OrderSchema = new mongoose.Schema<OrderType>({
  ...awaitingOrderSchema.obj,
  orderDetails: {
    ...awaitingOrderSchema.obj.orderDetails,
    stage: {
      main: { type: Number, required: true },
      sub: { type: Number, required: true },
    },
    repairer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
  },
});

export default mongoose.model("Order", OrderSchema);
