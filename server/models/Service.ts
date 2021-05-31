import * as mongoose from "mongoose";

// schemat dokumentu jobs
const serviceSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
});

// model
export default mongoose.model("Service", serviceSchema);
