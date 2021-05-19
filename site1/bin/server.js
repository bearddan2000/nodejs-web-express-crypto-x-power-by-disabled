const express = require('express');
const app = express();

app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.listen(8000, () => {
    console.log('server is listening on port 2020');
});
