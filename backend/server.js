const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

//Connexion à la base de donnée
connectDB();

const app = express();

// Ajoutez ce middleware pour gérer le corps de la requête JSON
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.use("/post", require("./routes/post.routes"));

//demarer le serveur
app.listen(port, () => console.log("serveur crée , demarré au port " + port));
