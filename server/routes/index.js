const express = require('express');

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     description: Returns the index
 *     responses:
 *       200:
 *         description: Shape Connect Index
 */

router.get('/', (req, res) => {
  res.send('Hello from the API!');
});

module.exports = router;
