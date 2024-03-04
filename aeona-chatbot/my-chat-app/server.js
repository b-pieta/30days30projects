const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());


app.get('/api/message', async (req, res) => {
    const { text, userId } = req.query;
    const url = `https://aeona3.p.rapidapi.com/?text=${encodeURIComponent(text)}&userId=${userId}`;

    const fetch = (await import('node-fetch')).default;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7c4261ea98msh09259eacd9d728ep155740jsn3545d3ec8af9', 
            'X-RapidAPI-Host': 'aeona3.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        res.send(result);
    } catch (error) {
        console.error('API call error:', error);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
