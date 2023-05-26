import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
//Creating app
const app = express();
//Connecting to the database
mongoose
  .connect("mongodb+srv://pasarelabackend.wme0vfc.mongodb.net/", {
    dbName: "westernbankpasarela",
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

import transactionRouter from "./database/transactions/transactions.router.js";
app.use("/WesternBank/transaction", transactionRouter);

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

