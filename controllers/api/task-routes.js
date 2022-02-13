const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Project, Task, User } = require("../../models");

// GET api/task
router.get("/", (req, res) => {
  Task.findAll({
    include: [Project],
  })
    .then((dbTaskData) => {
      if (!dbTaskData) {
        res.status(404).json({ message: "No tasks found" });
        return;
      }
      res.json(dbTaskData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET api/task/1
router.get("/:id", (req, res) => {
  Task.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [Project],
  })
    .then((dbTaskData) => {
      if (!dbTaskData) {
        res.status(404).json({ message: "No task found with this id" });
        return;
      }
      res.json(dbTaskData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users
router.post("/", withAuth, (req, res) => {
  Task.create({
    task_name: req.body.task_name,
    task_description: req.body.task_description,
    user_id: req.body.user_id, // CHANGE TO SESSION
    project_id: req.body.project_id,
  })
    .then((dbTaskData) => res.json(dbTaskData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT api/task/1
router.put("/:id", withAuth, (req, res) => {
  Task.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbTaskData) => {
      if (!dbTaskData[0]) {
        res.status(404).json({ message: "No task found with this id" });
        return;
      }
      res.json(dbTaskData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE api/task/1
router.delete("/:id", withAuth, (req, res) => {
  Task.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTaskData) => {
      if (!dbTaskData) {
        res.status(404).json({ message: "No task found with this id" });
        return;
      }
      res.json(dbTaskData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
