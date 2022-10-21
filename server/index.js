const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, getMagicAnswer, postDaysWorked, deleteGoal } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/magic", getMagicAnswer)
app.post("/api/goal", postDaysWorked)
app.delete("/api/goal/:id", deleteGoal)

app.listen(4000, () => console.log("Server running on 4000"));