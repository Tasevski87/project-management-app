const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Project, Task } = require("../../models");


// GET api/project
router.get("/", (req, res) => {
  Project.findAll({
    include: [Task],
  })
    .then((dbProjectData) => res.json(dbProjectData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET api/project/1
router.get("/:id", (req, res) => {
  Project.findOne({
    where: {
      id: req.params.id,
    },
    include: [Task],
  })
    .then((dbProjectData) => {
      if (!dbProjectData) {
        res.status(404).json({ message: "No project found with this id" });
        return;
      }
      res.json(dbProjectData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST api/project
router.post("/", withAuth, (req, res) => {
  Project.create({
    project_name: req.body.project_name,
    content: req.body.content,
    user_id: req.session.user_id, 
  })
    .then((dbProjectData) => res.json(dbProjectData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT api/project/1
router.put("/:id", withAuth, (req, res) => {
  Project.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbProjectData) => {
      if (!dbProjectData[0]) {
        res.status(404).json({ message: "No project found with this id" });
        return;
      }
      res.json(dbProjectData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE api/project/1
router.delete("/:id", withAuth, (req, res) => {
  Project.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbProjectData) => {
      if (!dbProjectData) {
        res.status(404).json({ message: "No project found with this id" });
        return;
      }
      res.json(dbProjectData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

