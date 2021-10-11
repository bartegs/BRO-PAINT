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
  order: awaitingOrderSchema,
  orderDetails: {
    orderNumber: Number,
    repairer: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "Employee",
    },
    stage: {
      main: Number,
      sub: Number,
    },
  },
});

export default mongoose.model("Order", OrderSchema);
