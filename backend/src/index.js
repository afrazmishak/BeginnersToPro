require('dotenv').config();

//WEBSERVER FRAMEWORK
const express = require('express');

//ALLOWS API TP ACCE[T REQUEST FROM REACT FRONTEND
const cors = require('cors');

//POSTGRESQL CONNECTION POOL FROM DB.JS FILE
const pool = require('./db');

//EXPRESS APP INSTANCE
const app = express();

//ALLOWS TO REQUEST THE BACKEND FROM REACT APP
app.use(cors({
  origin: ['http://localhost:5173']
}));

//JSON BODY FROM REQUEST
app.use(express.json());

//HEALTH CHECK OF THE BACKEND
app.get('/', (req, res) => {
  res.send('Backend running');
});

//CREATE POST ROUTE TO /USERS
app.post('/users', async (req, res) => {
  
  //EXTARCT VALUES FROM INCOMING JSON
  const { firstName, lastName, email, phone_number, dateOfBirth } = req.body;

  //TRY-CATCH FOR DATABASE QUERY
  try {
    //SENDS A PARAMETERIZED SQL QUERY TO POSTGRESQL TO PREVENT SQL INJECTION
    const result = await pool.query(
      'INSERT INTO users (first_name, last_name, email, phone_number, dateOfBirth) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [firstName, lastName, email, phone_number, dateOfBirth]
    );

    //ON SUCCESS, RETURNS 201 CREATED WITH THE NEW USER OBJECT
    res.status(201).json(result.rows[0]);
  } catch (err) {

    //ON FAILURE, LOGS REAL ERROR TO CONSOLE AND RETURNS SAFE MESSAGE TO CLIENT
    console.error(err); // log full error
    res.status(500).json({ error: 'Database error' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
