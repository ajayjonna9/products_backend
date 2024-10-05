const express = require('express');
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./controllers/productsController');
const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the product.
 *           example: "Sample Product"
 *         description:
 *           type: string
 *           description: A brief description of the product.
 *           example: "This is a sample product description."
 *         price:
 *           type: number
 *           description: The price of the product.
 *           example: 100.00
 *         isRecommended:
 *           type: integer
 *           description: Indicates if the product is recommended (1 for true, 0 for false).
 *           enum: [1, 0]
 *           example: 0
 *         isBestSeller:
 *           type: integer
 *           description: Indicates if the product is a best seller (1 for true, 0 for false).
 *           enum: [1, 0]
 *           example: 0
 *         status:
 *           type: integer
 *           description: The status of the product (1 for available, 0 for unavailable).
 *           enum: [1, 0]
 *           example: 0
 */


/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     description: This endpoint returns all products.
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error.
 */

router.get('/products', getProducts);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     description: This endpoint allows you to create a new product.
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error.
 */
router.post('/products', createProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update product by ID
 *     description: This endpoint allows you to update a product by its ID.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 */
router.put('/products/:id', updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete product by ID
 *     description: This endpoint allows you to delete a product by its ID.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to delete.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Product deleted successfully.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 */
router.delete('/products/:id', deleteProduct);

module.exports = router;
