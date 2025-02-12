import mysql from "mysql2"
// Configuración de MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "xPhmuuW3NA9FpG",
    database: "gptx"
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database!');
});
export default db;