import express from "express";
import cors from "cors";

// Methods from Controller.js
import {} from "./db/Controller.js";


const app = express();
const PORT = 4000;


app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. - Console Message`);
})


app.get("/", (req, res) => {
    res.send("Welcome to the backend home page!");
  });