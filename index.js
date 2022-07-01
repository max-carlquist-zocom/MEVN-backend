const express = require('express');
const app = express();
const axios = require('axios').default;
const cors = require('cors');
const path = require('path');

app.use(cors({origin: true, credentials: true}));

app.use(express.json());

app.use('/posts', async (req, res) => { 
    console.log('posts');
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = result.data;
    res.json(data);
});

app.listen(1337, () => {
    console.log('listening on port 1337');
});