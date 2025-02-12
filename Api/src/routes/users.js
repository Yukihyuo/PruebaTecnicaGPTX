import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import connection from '../../db.config.js'; // Importa la conexión desde db.config.js

const app = express.Router()

app.get("/", (req, res) => {
  res.send("Funcionando")
})

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Verifica si el usuario ya existe (usando la conexión a la base de datos)
    const data = await connection.execute(
      'SELECT * FROM users WHERE username = ? OR email = ?',
      [username, email]
    );

    console.log(data._rows.length)

    if (data._rows.length > 0) {
      return res.status(400).json({ mensaje: 'Usuario o correo electrónico ya existen' });
    }

    // Hashea la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Inserta el nuevo usuario en la base de datos
    const result = await connection.execute(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    const nuevoUsuarioId = result.insertId;

    // Genera el JWT
    const token = jwt.sign({ userId: nuevoUsuarioId }, 'xPhmuuW3NA9FpG');

    res.json({ token });
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ mensaje: 'Error en el registro' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {

    connection.execute('select * from users where username = ?', ["root"], async (err, rows) => {
      if (rows === 0) {
        return res.status(401).json({ mensaje: 'Credenciales inválidas' });
      }
      const usuario = rows[0]
      // Compara la contraseña ingresada con la contraseña hasheada
      const passwordValida = await bcrypt.compare(password, usuario.password);

      if (!passwordValida) {
        return res.status(401).json({ mensaje: 'Credenciales inválidas' });
      }

      // Genera el JWT
      const token = jwt.sign({ userId: usuario.id }, 'xPhmuuW3NA9FpG');

      res.json({ token });
    });


  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ mensaje: 'Error en el inicio de sesión' });
  }
});

export default app