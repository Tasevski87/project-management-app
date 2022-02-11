const router = require('express').Router();
const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');
const taskRoutes = require('./task-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/project', projectRoutes);
router.use('/task', taskRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
