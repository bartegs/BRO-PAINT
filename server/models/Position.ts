import * as mongoose from "mongoose";

// schemat dokumentu jobs
const positionSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
});

// model
export default mongoose.model("Position", positionSchema);
