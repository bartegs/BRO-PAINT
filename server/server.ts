import * as express from "express";

const app: express.Express = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
