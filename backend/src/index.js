require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Backend running');
});

// INSERT user into database
app.post('/users', async (req, res) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    return res.status(400).json({ error: 'Missing data' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO users (first_name, last_name)
       VALUES ($1, $2)
       RETURNING *`,
      [firstName, lastName]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Database error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
