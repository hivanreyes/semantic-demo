const express = require('express');
const exampleController = require('../controllers/exampleController')();

const router = express.Router();

/**
 * @swagger
 * /api/example:
 *   get:
 *     description: Returns the example route
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Example Route GET
 */
router.get('/', exampleController.get);

/**
 * @swagger
 * /api/example:
 *   post:
 *     description: Posts data to the example route
 *     produces:
 *      - application/json
 *     parameters:
 *      - name: example name
 *        description: Your Name to test Example
 *        in: body
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Example Route POST
 */
router.post('/', exampleController.post);

/**
 * @swagger
 * /api/example:
 *   put:
 *     description: Puts data to the example route
 *     produces:
 *      - application/json
 *     parameters:
 *      - name: example name
 *        description: Your Name to test Example
 *        in: body
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Example Route PUT
 */
router.post('/', exampleController.put);

/**
 * @swagger
 * /api/example:
 *   delete:
 *     description: Deletes data in example route
 *     produces:
 *      - application/json
 *     parameters:
 *      - name: example name
 *        description: Your Name to test Example
 *        in: body
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Example Route DELETE
 */
router.post('/', exampleController.destroy);

module.exports = router;
