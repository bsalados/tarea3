const express = require('express');
const app = express();

const configureRoutes = require('./routes');
const { globalMw } = require('./middlewares/exampleMW');

const port = process.env.PORT
//const port = 3000;

app.use(express.json());
app.use(globalMw);
// app.use('/clients', (req, res, next) => {
//     console.log('you are accessing clients mw');
//     next();
// });

configureRoutes(app);


app.get('/', (req, res) => {
    res.send('This is your main route');
});

app.listen(port, () => {
    console.log('server running on',port);
});