const express = require('express');
const app = express();
const port = process.env.PORT || 8082;

app.use('/', express.static('dist/ahrendee'));

app.listen(port, () => {
    console.log('app started and listening to port ', port);
})
