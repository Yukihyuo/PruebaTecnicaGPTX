import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import users from "./src/routes/users.js";
import people from "./src/routes/people.js";

const app = express();
dotenv.config()

// Middleware
app.use(express.json());
app.use(cors({
    origin:"*"
}))

// Rutas
app.use("/users", users)
app.use("/people", people)

app.get("/", (req, res) => {
    res.send("Funcionando")
})

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal!' });
});


app.listen(3050, () => {
    console.log("first")
})