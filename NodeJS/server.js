const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send("Hello Rockettseat");
});

app.listen(3002);