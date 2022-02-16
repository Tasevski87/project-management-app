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
        attributes: ["id", "project_name", "content", "user_id", "created_at"],
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
        attributes: ["id", "project_name", "content", "user_id", "created_at"],
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
        attributes: ["id", "project_name", "content", "user_id", "created_at"],
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
    include: [
      {
        model: Project,
        attributes: ["id", "project_name", "content", "user_id", "created_at"],
        include: [
          {
            model: Comment,
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

// edit a user
router.get("/user/edit/:id", withAuth, (req, res) => {
  User.findByPk(req.params.id, {
    attributes: [
      "id",
      "name",
      "username",
      "about",
      "email",
      "password",
      "avatar",
      "created_at",
    ],
  })
    .then((dashboardData) => {
      const dashboardDataArr = [dashboardData];
      const dashboard = dashboardDataArr.map((user) =>
        user.get({ plain: true })
      )[0];

      // render dashboard view, send project data and loggedIn
      res.render("dash-edit", {
        dashboard,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// edit a project
router.get("/project/edit/:id", withAuth, (req, res) => {
  Project.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: [
          "id",
          "name",
          "username",
          "about",
          "email",
          "password",
          "avatar",
          "created_at",
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
      res.render("dash-edit-proj.handlebars", {
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
