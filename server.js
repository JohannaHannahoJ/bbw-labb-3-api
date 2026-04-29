// importera program
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Konfiguration
require("dotenv").config();

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

// Skapa ett schema för workexperience
const WorkexperienceSchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: [true, "Du måste ange en arbetsgivare."]
        },
    job_title: {
        type: String,
        required: [true, "Du måste ange en jobbtitel."]
    },
    start_date: {
        type: Date,
        required: [true, "Du måste ange ett startdatum."]
    },
    end_date: {
        type: Date,
        required: false,
    },
    description: {
        type: String,
        required: false
    }
});

// inkludera schemat till databasen
const Workexperience = mongoose.model("Workexperience", WorkexperienceSchema);

// Routes
app.get("/api", async (req, res) => {
    res.json({message: "Hello from my api!"});
});

// Route för att hämta arbetslivserfarenheter från api:t
app.get("/workexperiences", async(req, res) => {
    try {
        let result = await Workexperience.find({});

        return res.json(result);
    } catch(error) {
        return res.status(500).json(error);
    }
});

// Route för att lägga till erfarenhet i workexperience
app.post("/workexperiences", async(req, res) => {
    try {
        const result = await Workexperience.create(req.body);
        return res.json(result);
    } catch(error) {
        return res.status(400).json(error);
    }
});

// Starta
app.listen(port, () => {
    console.log("Server started on port: " + port);
})