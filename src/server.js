const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const productRoutes = require('./routes/routes');
const swaggerUi = require('swagger-ui-express'); 
// const swaggerSpec = require('./swaggerOptions');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', productRoutes);

// Swagger Route
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 5000;
connectDB().then(res=>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
})

