const express = require('express');

const ping = require('./middlewaares/ping');
const hello = require('./middlewaares/hello');
const greeting = require('./middlewaares/greeting');
const getSimpsons = require('./middlewaares/getsimpson');

const app  = express();
const APP_PORT = 3001;

app.use(express.json())

// Ex.2
app.use('/ping', ping);

// Ex.4
app.use('/hello', hello)

// Ex.5
app.use('/greeting', greeting);

// EX.8
app.use('/simpsons', getSimpsons);

app.listen(APP_PORT, () => {console.log(`Rodando na porta ${APP_PORT}`)})
