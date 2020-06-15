const {
    Router
} = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/posts', controllers.createPost);

module.exports = router;

router.get('/posts', controllers.getAllPosts);

router.get('/posts/:postId', controllers.getPostById);

router.put('/posts/:postId', controllers.updatePost);

router.delete('/posts/:postId', controllers.deletePost);

module.exports('routes');