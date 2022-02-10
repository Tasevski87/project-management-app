const router = require('express').Router();
const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');
const serviceRoutes = require('./service-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/project', projectRoutes);
router.use('/service', serviceRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
