const path = require('path');

// Setup Swagger JSDOC
const swaggerDefinition = {
  info: {
    title: 'Semantic ui demo',
    version: '1.0.0',
  },
  basePath: '/api',
};

const swaggerOptions = {
  swaggerDefinition,
  apis: [path.resolve(path.join(__dirname, '/../routes/*.js'))],
};

module.exports = swaggerOptions;
