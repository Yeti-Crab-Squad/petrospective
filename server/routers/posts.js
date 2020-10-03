const express = require('express');

const postController = require('../controllers/PostController');

const router = express.Router();

router.post('/', postController.addPost);
router.get('/:title', postController.getPost);
router.put('/:title', postController.updatePost);
router.delete('/:title', postController.deletePost);

module.exports = router;
