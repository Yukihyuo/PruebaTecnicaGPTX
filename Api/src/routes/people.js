import express from 'express';
import connection from '../../db.config.js'; // Importa la conexión a la base de datos

const app = express.Router();

// GET /personas - Obtener todas las personas
app.get('/', async (req, res) => {
    try {
        const data = await connection.execute('SELECT * FROM people');
        res.json(data._rows);
    } catch (error) {
        console.error('Error al obtener personas:', error);
        res.status(500).json({ mensaje: 'Error al obtener personas' });
    }
});

// GET /personas/:id - Obtener una persona por ID
app.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await connection.execute('SELECT * FROM people WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ mensaje: 'Persona no encontrada' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Error al obtener persona:', error);
        res.status(500).json({ mensaje: 'Error al obtener persona' });
    }
});

// POST /personas - Crear una nueva persona
app.post('/', async (req, res) => {
    const { nombre, apellido_paterno, apellido_materno, direccion, telefono } = req.body;
    try {
        const [result] = await connection.execute(
            'INSERT INTO people (nombre, apellido_paterno, apellido_materno, direccion, telefono) VALUES (?, ?, ?, ?, ?)',
            [nombre, apellido_paterno, apellido_materno, direccion, telefono]
        );
        res.status(201).json({ id: result.insertId, mensaje: 'Persona creada' });
    } catch (error) {
        console.error('Error al crear persona:', error);
        res.status(500).json({ mensaje: 'Error al crear persona' });
    }
});

// PUT /personas/:id - Actualizar una persona
app.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido_paterno, apellido_materno, direccion, telefono } = req.body;
    try {
        const [result] = await connection.execute(
            'UPDATE people SET nombre = ?, apellido_paterno = ?, apellido_materno = ?, direccion = ?, telefono = ? WHERE id = ?',
            [nombre, apellido_paterno, apellido_materno, direccion, telefono, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'Persona no encontrada' });
        }
        res.json({ mensaje: 'Persona actualizada' });
    } catch (error) {
        console.error('Error al actualizar persona:', error);
        res.status(500).json({ mensaje: 'Error al actualizar persona' });
    }
});

// DELETE /personas/:id - Eliminar una persona
app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await connection.execute('DELETE FROM people WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'Persona no encontrada' });
        }
        res.json({ mensaje: 'Persona eliminada' });
    } catch (error) {
        console.error('Error al eliminar persona:', error);
        res.status(500).json({ mensaje: 'Error al eliminar persona' });
    }
});

export default app;