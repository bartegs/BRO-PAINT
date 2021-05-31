import * as mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  login: {
    nickName: {
      type: String,
      required: true,
      min: 2,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
  },
  employeeInfo: {
    firstName: {
      type: String,
      required: true,
      min: 2,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
    },
    position: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Position",
      required: true,
    },
    telephone: {
      type: String,
      required: true,
      min: 9,
    },
    email: {
      type: String,
      required: true,
      min: 5,
    },
    pesel: {
      type: Number,
      required: false,
      min: 9,
    },
    birthDate: {
      type: String,
      required: true,
      min: 8,
      max: 8,
    },
    accountNumber: {
      type: String,
      required: false,
      min: 18,
    },

    address: {
      street: {
        type: String,
        required: false,
        min: 2,
      },
      apartment: {
        type: String,
        required: false,
        min: 1,
      },
      city: {
        type: String,
        required: true,
        min: 2,
      },
      postalCode: {
        type: String,
        required: true,
        min: 5,
      },
    },
  },
});

export default mongoose.model("Employee", employeeSchema);
