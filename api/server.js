const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const db = require("./db/db");
require("./models");
const routes = require("./routes");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);

app.get("/", function (req, res) {
  res.send("Hola mundo!");
});

db.sync({ force: false }).then(() => {
  console.log("Se conecto bien la db");
  app.listen(3001, () => console.log("Servidor corriendo en el puerto 3001"));
});
