import { resolve, join } from "path";
import * as express from "express";
import * as mongoose from "mongoose";
import { config } from "dotenv";
import * as cors from "cors";
import router from "./routes";

config();

const app: express.Express = express();
const appsRoot = resolve(process.cwd(), "dist/apps/");

app.use(express.json());
app.use(express.static(appsRoot));
app.use(cors());

app.use("/", express.static(join(appsRoot, "client")));
app.use("/pracownik", express.static(join(appsRoot, "employee")));

app.use(router);

mongoose.connect(
  `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@bropaint.onalf.mongodb.net/${process.env.ATLAS_DB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

const port = process.env.PORT || 3000;

app.listen(port);
