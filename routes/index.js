const router = require("express").Router()
const controllers = require('../controllers');


router.post('/posts', controllers.createPost);

router.get('/posts', controllers.getAllPosts);

//router.get('/posts/:postId', controllers.getPostById);

router.put('/posts/:postId', controllers.updatePost);

router.delete('/posts/:postId', controllers.deletePost);

router.use(require("./htmlRoutes"))

module.exports = router;