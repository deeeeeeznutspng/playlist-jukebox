const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Hello PLAYLIST JUKEBOX WE SO BACKKKKK');    
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});