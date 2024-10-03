const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Product Management API',
    version: '1.0.0',
    description: 'API documentation for managing products using Node.js, Express, and MongoDB',
  },
  servers: [
    {
      url: 'http://localhost:5000/api',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to the API routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
