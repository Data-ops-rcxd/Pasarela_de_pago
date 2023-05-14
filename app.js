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
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.sendFile("landing/login.html", { root: "pages" });
});
app.get("/landing", (req, res) => {
    res.sendFile("landing/pasarela.html", { root: "pages" });
  });
app.get("/purchases", (req, res) => {
  res.sendFile("purchases/purchases.html", { root: "pages" });
});
app.get("/cal", (req, res) => {
  res.send({ words: "Test words" });
});

//connection port
const port = 3000;
//Trying connection
try {
  app.listen(port, () => {
    console.log('Server started in port: ' + port);
  });
} catch (error) {
  console.log(error);
}
