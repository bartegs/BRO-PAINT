import * as mongoose from "mongoose";

export interface ServiceType {
  _id: string;
  name: string;
}

const serviceSchema = new mongoose.Schema<ServiceType>({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 40,
  },
});

// model
export default mongoose.model("Service", serviceSchema);
