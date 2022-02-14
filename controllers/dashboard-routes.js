const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Project, User, Comment, Task } = require("../models");

// get all users projects for dashboard
router.get("/", withAuth, (req, res) => {
  Project.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "project_name", "content", "created_at"],
    include: [
      {
        model: User,
        attributes: { exclude: ["password"] },
      },
    ],
  })
    .then((dashboardData) => {
      const dashboard = dashboardData.map((project) =>
        project.get({ plain: true })
      );
      // render dashboard view, send project data and loggedIn
      res.render("dash-main", {
        dashboard,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all comments for dashboard
router.get("/comments", withAuth, (req, res) => {
  Comment.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "comment_text", "project_id", "user_id", "created_at"],
    include: [
      {
        model: User,
        attributes: { exclude: ["password"] },
      },
    ],
  })
    .then((dashboardData) => {
      const dashboard = dashboardData.map((comment) =>
        comment.get({ plain: true })
      );
      // render dashboard view, send comment data and loggedIn
      console.log(dashboard);
      res.render("dash-comments", {
        dashboard,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all tasks for dashboard
router.get("/tasks", withAuth, (req, res) => {
  Task.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "task_name", "task_description", "user_id", "created_at"],
    include: [
      {
        model: User,
        attributes: { exclude: ["password"] },
      },
    ],
  })
    .then((dashboardData) => {
      console.log(dashboardData)
      const dashboard = dashboardData.map((task) =>
        task.get({ plain: true })
      );
      // render dashboard view, send task data and loggedIn
      console.log("tasks:",dashboard);
      res.render("dash-tasks", {
        dashboard,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create project
router.get("/create", withAuth, (req, res) => {
  res.render("dash-create");
});

module.exports = router;
