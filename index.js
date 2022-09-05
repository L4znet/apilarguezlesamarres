const express = require('express');
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');


const swaggerSpec = require('./swaggerdoc.json');

app.use(express.static('public'))
app.use('/api', routes.router);
app.use('/docs', swaggerUi.serve);
app.get('/docs', swaggerUi.setup(swaggerSpec));


app.listen(process.env.PORT || 3000);

module.exports = app;