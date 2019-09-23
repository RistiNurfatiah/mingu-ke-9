const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('HALO AKUUU ');
})
app.listen(port, ()=> console.log(`app listen on port ${port}`))