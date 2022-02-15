const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Project, User, Comment, Task } = require("../models");

// get user data for dashboard-projects
router.get("/", withAuth, (req, res) => {
  User.findOne({
    order: [["id", "DESC"]],
    attributes: [
      "id",
      "name",
      "username",
      "about",
      "email",
      "avatar",
      "created_at",
    ],
    where: {
      id: req.session.user_id,
    },
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "user_id",
          "project_id",
          "created_at",
        ],
        include: [
          {
            model: Project,
          },
          {
            model: User,
          },
        ],
      },
      {
        model: Project,
        attributes: ["id", "project_name", "user_id", "created_at"],
        include: [
          {
            model: Comment,
          },
          {
            model: User,
          },
        ],
      },
      {
        model: Task,
        attributes: [
          "id",
          "task_name",
          "task_description",
          "user_id",
          "project_id",
          "created_at",
        ],
        include: [
          {
            model: Project,
          },
          {
            model: User,
          },
        ],
      },
    ],
  })
    .then((dashboardData) => {
      const dashboardDataArr = [dashboardData];
      const dashboard = dashboardDataArr.map((user) =>
        user.get({ plain: true })
      )[0];

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

// get user data for dashboard-comments
router.get("/comments", withAuth, (req, res) => {
  User.findOne({
    order: [["id", "DESC"]],
    attributes: [
      "id",
      "name",
      "username",
      "about",
      "email",
      "avatar",
      "created_at",
    ],
    where: {
      id: req.session.user_id,
    },
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "user_id",
          "project_id",
          "created_at",
        ],
        include: [
          {
            model: Project,
          },
          {
            model: User,
          },
        ],
      },
      {
        model: Project,
        attributes: ["id", "project_name", "user_id", "created_at"],
        include: [
          {
            model: Comment,
          },
          {
            model: User,
          },
        ],
      },
      {
        model: Task,
        attributes: [
          "id",
          "task_name",
          "task_description",
          "user_id",
          "project_id",
          "created_at",
        ],
        include: [
          {
            model: Project,
          },
          {
            model: User,
          },
        ],
      },
    ],
  })
    .then((dashboardData) => {
      const dashboardDataArr = [dashboardData];
      const dashboard = dashboardDataArr.map((user) =>
        user.get({ plain: true })
      )[0];

      // render dashboard view, send project data and loggedIn
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

// get user data for dashboard-comments
router.get("/tasks", withAuth, (req, res) => {
  User.findOne({
    order: [["id", "DESC"]],
    attributes: [
      "id",
      "name",
      "username",
      "about",
      "email",
      "avatar",
      "created_at",
    ],
    where: {
      id: req.session.user_id,
    },
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "user_id",
          "project_id",
          "created_at",
        ],
        include: [
          {
            model: Project,
          },
          {
            model: User,
          },
        ],
      },
      {
        model: Project,
        attributes: ["id", "project_name", "user_id", "created_at"],
        include: [
          {
            model: Comment,
          },
          {
            model: User,
          },
        ],
      },
      {
        model: Task,
        attributes: [
          "id",
          "task_name",
          "task_description",
          "user_id",
          "project_id",
          "created_at",
        ],
        include: [
          {
            model: Project,
          },
          {
            model: User,
          },
        ],
      },
    ],
  })
    .then((dashboardData) => {
      const dashboardDataArr = [dashboardData];
      const dashboard = dashboardDataArr.map((user) =>
        user.get({ plain: true })
      )[0];

      // render dashboard view, send project data and loggedIn
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
  User.findOne({
    order: [["id", "DESC"]],
    attributes: [
      "id",
      "name",
      "username",
      "about",
      "email",
      "avatar",
      "created_at",
    ],
    where: {
      id: req.session.user_id,
    },
  })
    .then((dashboardData) => {
      const dashboardDataArr = [dashboardData];
      const dashboard = dashboardDataArr.map((user) =>
        user.get({ plain: true })
      )[0];

      // render dashboard view, send project data and loggedIn
      res.render("dash-create", {
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
