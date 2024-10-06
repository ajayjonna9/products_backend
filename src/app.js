const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express'); 
const swaggerJsdoc = require('swagger-jsdoc');
// const swaggerOptions = require('./config/swagger');
const helmet = require('helmet');


dotenv.config();

const app = express();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0", 
    info: {
      title: "Products API",  
      version: "1.0.0",      
      description: "API for managing products",  
    },
    servers: [
      {
        url: "http://localhost:5000",  
      },
    ],
  },
   apis: [`${__dirname}/routes.js`]  
};
// console.log(__dirname/),

const swaggerDocs = swaggerJsdoc(swaggerOptions); 

app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],  // Only allow resources from the same origin
    // scriptSrc: ["'self'", "'trusted-cdn.com'"],  // Allow scripts from the same origin and a trusted CDN
    // objectSrc: ["'none'"],  // Disallow object elements
    upgradeInsecureRequests: [],  // Automatically upgrade HTTP requests to HTTPS
  }
}));

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.use((err, req, res, next) => {
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});
   
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));  

const PORT = process.env.PORT || 5000;
connectDB().then(res=>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
})

