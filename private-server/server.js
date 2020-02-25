require('dotenv').config();
const express = require('express');

const app = express();

app.get('/api/send-data', (req ,res) => {
    res.send({
        message: 'hello, I am web private server '
    });
});


app.listen(3000, () => {
    console.log('Server running port 3000');
})