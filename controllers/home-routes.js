const router = require("express").Router();
const { User, Project, Comment, Task } = require("../models");

// get projects for homepage
router.get("/", (req, res) => {
  Project.findAll({
    attributes: ["id", "project_name", "content", "created_at"],
    include: [
      {
        model: Comment
      },
      {
        model: Task
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbProjectData) => {
      const projects = dbProjectData.map((project) =>
        project.get({ plain: true })
      );
      res.render("homepage", {
        projects,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a single project for view
router.get("/project/:id", (req, res) => {
  Project.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "project_name", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "project_id",
          "user_id",
          "created_at",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbProjectData) => {
      if (!dbProjectData) {
        res.status(404).json({ message: "No project found with this id" });
        return;
      }

      const project = dbProjectData.get({ plain: true });
      // render single project page, send project data and loggedIn
      res.render("single-project", {
        project,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// generate login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dash-main");
    return;
  }

  res.render("login");
});

// generate signup page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dash-main");
    return;
  }

  res.render("signup");
});

module.exports = router;
