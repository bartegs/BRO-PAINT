import * as mongoose from "mongoose";

export interface EmployeeType extends mongoose.Document {
  role: string;
  login: {
    nickName: string;
    password: string;
  };
  employeeInfo: {
    firstName: string;
    lastName: string;
    position: string;
    phone: string;
    email: string;
    pesel: string;
    birthDate: Date;
    accountNumber: string;

    address: {
      street: string;
      apartment: string;
      city: string;
      postalCode: string;
    };
  };
}

const employeeSchema = new mongoose.Schema<EmployeeType>({
  role: { type: String, required: true },
  login: {
    nickName: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 6,
    },
  },
  employeeInfo: {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    position: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Position",
      required: true,
    },
    phone: {
      type: String,
      required: true,
      min: 9,
      max: 15,
    },
    email: {
      type: String,
      required: true,
      min: 3,
      max: 254,
    },
    pesel: {
      type: String,
      required: false,
      min: 11,
      max: 11,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    accountNumber: {
      type: String,
      required: false,
      min: 15,
      max: 32,
    },

    address: {
      street: {
        type: String,
        required: false,
        min: 2,
        max: 100,
      },
      apartment: {
        type: String,
        required: false,
        min: 1,
        max: 10,
      },
      city: {
        type: String,
        required: true,
        min: 1,
        max: 100,
      },
      postalCode: {
        type: String,
        required: true,
        min: 2,
        max: 10,
      },
    },
  },
});

export default mongoose.model<EmployeeType>("Employee", employeeSchema);
