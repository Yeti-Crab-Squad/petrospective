const express = require('express');

const listItemController = require('../controllers/ListItemController.js');

const router = express.Router();

router.post('/', listItemController.addItem);
router.get('/:item', listItemController.getItem);
router.delete('/:item', listItemController.deleteItem);

module.exports = router;
