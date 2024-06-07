const express = require('express');
const conn = require('./config/conn');
const app = express();
const routes = require('./routes/index');

app.use(express.json())
app.use(routes)
conn();

const PORTA = 3000
app.listen(PORTA, () => (console.log(`Server on, Rodando na PORTA:${PORTA}`)))