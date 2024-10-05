const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express'); 
const swaggerJsdoc = require('swagger-jsdoc');
// const swaggerOptions = require('./config/swagger');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// API Routes
app.use('/api', routes);
// swaggerOptions.js
const swaggerOptions = {
  definition: {
    openapi: "3.0.0", 
    info: {
      title: "Products API",  
      version: "1.0.0",       // API version
      description: "API for managing products",  // Short description of your API
    },
    servers: [
      {
        url: "http://localhost:5000",  // Replace with your production URL if deployed
      },
    ],
  },
  // Path to the API docs (points to your route files where endpoints are defined)
   apis: [`${__dirname}/routes.js`]  // Adjust this path based on your folder structure
};
// console.log(__dirname/),

// Swagger Route
const swaggerDocs = swaggerJsdoc(swaggerOptions);    // Generate docs from options
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));  // Swagger UI route

const PORT = process.env.PORT || 5000;
connectDB().then(res=>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
})

