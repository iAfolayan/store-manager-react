const express = require('express');
const path = require('path');

const app = express();

const {PORT = 6000} = process.env;

app.use(express.static(path.join(__dirname,'./dist')))

app.all('*', (req, res) => res.sendFile(path.join(__dirname, './dist/index.html')));

app.listen(PORT);