const express = require('express');
const axios = require('axios').default;

const app = express();

const private_endpoint = process.env.PRIVATE_ENDPOINT || 'http://private-node-web';
const private_port = process.env.PRIVATE_PORT || 3000;

app.get('/', async (req ,res) => {
    const response = await axios.get(`${private_endpoint}:${private_port}/api/send-data`);
    res.send(response.data);
});


app.listen(3000, () => {
    console.log('Server running port 3000');
})