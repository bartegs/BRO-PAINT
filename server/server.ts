import * as express from "express";
import * as mongoose from "mongoose";
import { config } from "dotenv";
import Position from "./models/Position";

config();

const app: express.Express = express();
app.use(express.json());

mongoose.connect(
  `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@bropaint.onalf.mongodb.net/${process.env.ATLAS_DB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/positions", (req, res) => {
  Position.find({})
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(() => {
      res.status(404).json({ message: "No positions found" });
    });
});

app.post("/positions", (req, res) => {
  const position = new Position({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });
  position
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Position added",
        info: result,
      });
    })
    .catch(() =>
      res.status(500).json({ message: "Position not added - error" })
    );
});

app.listen(3000);
