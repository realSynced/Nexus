const { Client } = require('pg');
const express = require('express');
const app = express();
const PORT = 3001;

// Creating a new client instance
const client = new Client({
  user: 'default',
  host: 'ep-orange-frog-a4uc1sm3-pooler.us-east-1.aws.neon.tech',
  database: 'verceldb',
  password: '9nBhkUoW6MgQ',
  port: 5432, // default PostgreSQL port
  ssl: {
    rejectUnauthorized: true // For testing purposes only, should be set to true in production
  }
});

// Connecting to PostgreSQL database
client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

app.get('/api/userdata', async (req, res) => {
  try {
    // Hardcoded email for testing
    const email = "john@example.com";

    // If email parameter is not provided, return an error response with a message
    if (!email) {
      return res.status(400).json({ error: "Email parameter is missing" });
    }

    // Querying the database for user data
    const queryText = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await client.query(queryText, [email]);

    // Check if any rows were returned
    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Extract user data from the first row
    const user = rows[0];

    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
