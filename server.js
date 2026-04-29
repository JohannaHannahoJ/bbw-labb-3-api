// importera program
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Konfiguration
require('dotenv').config()

// skapa express-applikation
const app = express();
// portinställning
const port = 3000;

// Middlewares
app.use(cors()); // tillåter cross-origin req
app.use(express.json()); // så att API:et kan läsa JSON i req

// connect to Mongodb
mongoose.connect("mongodb://localhost:27017/cv").then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connecting to database: " + error);
})

// Ruotes
app.get("/api", async (req, res) => {
    res.json({message: "Hello from my api!"});
});

// Starta
app.listen(port, () => {
    console.log("Server started on port: " + port);
})