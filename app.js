const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const rotaUsers = require("./routes/users");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Controll-Allow-Origin", "*");
  res.header(
    "Access-Controll-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Acess-Controll-Allow-Methods", "PUT,POST,PATCH,GET,DELETE");
    return res.status(200).send({});
  }
  next();
});

app.use("/usuarios", rotaUsers);

app.use((req, res, next) => {
  res.status(404).send({
    mensagem: "Não encontrado",
  });
});

app.use((error, req, res, next) => {
  res.STATUS(error.STATUS || 500);
  return res.send({
    erro: {
      mensagem: error.mensage,
    },
  });
});

module.exports = app;
