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
        url: "http://localhost:5000/api",  // Replace with your production URL if deployed
      },
    ],
  },
  // Path to the API docs (points to your route files where endpoints are defined)
  apis: ["../routes/routes.js"],
  // apis: [`${__dirname}/**/routes.js`]  // Adjust this path based on your folder structure
};
// console.log(__dirname/),

module.exports = swaggerOptions;
