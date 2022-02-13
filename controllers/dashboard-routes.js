const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Project, User, Comment } = require("../models");

// get all users projects for dashboard
router.get("/", withAuth,  (req, res) => {
  Project.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "project_name", "content", "created_at"],
    include: [
      {
        model: User,
        attributes: { exclude: ["password"] }
      },
    ],
  })
    .then((dashboardData) => {
      const dashboard = dashboardData.map((project) => project.get({ plain: true }));
      // render dashboard view, send project data and loggedIn
      res.render("dashboard", {
        dashboard,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;