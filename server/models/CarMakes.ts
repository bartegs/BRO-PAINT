import * as mongoose from "mongoose";

export interface CarMakeType {
  name: string;
  segment: number;
}

const carMakeSchema = new mongoose.Schema<CarMakeType>({
  name: {
    require: true,
    type: String,
  },
  segment: {
    require: true,
    type: Number,
  },
});

export default mongoose.model<CarMakeType>("CarMake", carMakeSchema);
