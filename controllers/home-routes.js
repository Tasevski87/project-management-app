const router = require("express").Router();
const { User, Project, Comment, Task } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

// generate login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});


module.exports = router;
