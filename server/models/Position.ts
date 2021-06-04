import * as mongoose from "mongoose";

const positionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 40,
  },
});

// model
export default mongoose.model("Position", positionSchema);
