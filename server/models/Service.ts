import * as mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
});

// model
export default mongoose.model("Service", serviceSchema);
