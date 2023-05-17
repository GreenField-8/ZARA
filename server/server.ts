import express from "express";
import cors from "cors";

const port = 5000;

const app = express();

const db = require("./database/index")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, function () {
  console.log("Listening on port 3000!");
});
