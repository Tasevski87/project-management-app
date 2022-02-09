const router = require('express').Router();
const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');
const serviceRoutes = require('./service-routes');

router.use('/users', userRoutes);
router.use('/project', projectRoutes);
router.use('/service', serviceRoutes);

module.exports = router;
