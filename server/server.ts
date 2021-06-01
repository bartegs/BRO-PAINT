import * as express from "express";
import * as mongoose from "mongoose";
import { config } from "dotenv";
import router from "./routes";

config();

const app: express.Express = express();

app.use(express.json());
app.use(router);

mongoose.connect(
  `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@bropaint.onalf.mongodb.net/${process.env.ATLAS_DB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const port = process.env.PORT || 3000;

app.listen(port);
