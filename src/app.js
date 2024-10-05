const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const productRoutes = require('./routes/routes');
const swaggerUi = require('swagger-ui-express'); 
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOptions = require('./config/swagger');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', productRoutes);

// Swagger Route
const swaggerDocs = swaggerJsdoc(swaggerOptions);    // Generate docs from options
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));  // Swagger UI route

const PORT = process.env.PORT || 5000;
connectDB().then(res=>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
})

