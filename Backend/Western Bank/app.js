import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
//Creating app
const app = express();
//Connecting to the database
mongoose
  .connect("mongodb+srv://pasarelabackend.wme0vfc.mongodb.net/", {
    dbName: "pasarelabackend",
    user: process.env.Mongo_user,
    pass: process.env.Mongo_pass,
  })
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.log(err);
  });
//Middlewares
app.use(cors());
app.use(bodyParser.json())

//Using the HTML Static files
app.use(express.static("pages"));

//Routes
import usersRouter from "./database/users/users.router.js";
app.use("/WesternBank/users", usersRouter);

import cardsRouter from "./database/cards/cards.router.js";
app.use("/WesternBank/cards", cardsRouter);

app.get("/WesternBank/cal", (req, res) => {
  res.send({ words: "Test words" });
});

//connection port
const port = 3100;
const ipAddress = '0.0.0.0'
//Trying connection
try {
  app.listen(port, ipAddress,() => {
    console.log('Server started in port: ' + port + ' with address: ' + ipAddress);
  });
} catch (error) {
  console.log(error);
}


// 1. cambiar de agregar usuarios en la DB a leer la información.
// 2. La info pedida en la landing se usa para: info de transacción si se unde pagar, info a consultar para consultar saldos de tarjetas
// 3. Pagina de consulta de saldos
// 4. Pagina de registros de transacción
// 5. Mensajes de guía para el usuario