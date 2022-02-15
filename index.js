const express = require("express");
const index = require("./routes/index");

//Crear una app de express
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", index);

app.listen(19999);
