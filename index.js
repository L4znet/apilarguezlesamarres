const express = require('express');
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: "API de l'app mobile Larguez les amarres",
        version: '1.0.0',
        description: "API consommée par l'app Larguez les amarres",
    },
    servers: [
        { url: 'http://localhost:3000' },
        { url: "https://apilarguezlesamarres.vercel.app" },
    ],

};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use(express.static('public'))
app.use('/api', routes.router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(process.env.PORT || 3000);

module.exports = app;