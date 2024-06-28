import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";


const app = express();
const port = 3000;
var bandName = "";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bandNameGenerator);

function bandNameGenerator (req, res, next) {
  bandName = req.body["street"] + req.body["pet"];
  next();
}


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}</h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
