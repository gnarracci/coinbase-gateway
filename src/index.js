const express = require('express');

// ENV Config
require('dotenv').config({
    path: './src/.env'
})

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App listening on port, ${PORT}`);
})