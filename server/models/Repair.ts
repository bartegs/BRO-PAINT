import * as mongoose from "mongoose";
import { awaitingOrderSchema } from "./AwaitingOrder";

const RepairSchema = new mongoose.Schema({
  repair: awaitingOrderSchema,
  repairDetails: {
    repairer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    stage: {
      main: {
        id: {
          type: Number,
        },
        name: {
          type: String,
        },
      },
      sub: {
        id: {
          type: Number,
        },
        name: {
          type: String,
        },
      },
    },
  },
});

// model
export default mongoose.model("Repair", RepairSchema);
