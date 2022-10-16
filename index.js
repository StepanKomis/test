const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('lol');
})

app.listen(5000);