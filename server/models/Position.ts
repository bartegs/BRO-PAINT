import * as mongoose from "mongoose";

const positionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
});

// model
export default mongoose.model("Position", positionSchema);
