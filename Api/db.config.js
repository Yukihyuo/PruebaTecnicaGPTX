import mysql from "mysql2";
import dotenv from "dotenv"
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost", // Add a default for local development
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database!');
});

export default db;