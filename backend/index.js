// Load environment variables from the .env file
require('dotenv').config();

// Access environment variables
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

console.log("Client ID:", clientId); // Test if variables are loaded

const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send(`client ID: ${clientId}`);
});
 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});