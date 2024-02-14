const express = require("express");
const port = 5000;

const app = express();

// Ajoutez ce middleware pour gérer le corps de la requête JSON
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.use("/post", require("./routes/post.routes"));

//demarer le serveur
app.listen(port, () => console.log("serveur crée , demarré au port " + port));
