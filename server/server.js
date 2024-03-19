const sql = require('@vercel/postgres');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;


  

app.get('/api/84840301293', async (req, res) => {
    try {
        // Extracting query parameters from the URL
        const url = new URL(req.url);
        // const email = url.searchParams.get('email');
        const email = "john@example.com"
        
        // If email parameter is not provided, return an error response with a message
        if (!email) {
          return error();
        }
        // You can use the email parameter to fetch data from the database
        const response = await sql`SELECT * FROM users WHERE email = ${email}`;
        // Check if any rows were returned
        if (response.rows.length === 0) {
          return response.error();
        }
        // Extract user data from the first row
        const user = response.rows[0];
    
        res.json({user});
      }
      catch (error) {
        console.error(error);
        // return error();
      }
    });



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})