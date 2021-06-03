import * as mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 40,
  },
});

// model
export default mongoose.model("Service", serviceSchema);
