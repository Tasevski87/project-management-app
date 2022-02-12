const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project, Task, Comment, User } = require('../models');

router.get('/', (req, res) => {
    Project.findAll({
      attributes: [
        'id',
        'project_name',
        'content',
        'user_id',
        [sequelize.literal('(SELECT * FROM task WHERE project.id = task.project_id)')]
      ],
      include: [
        {
          model: Task,
          attributes: ['id', 'task_name', 'post_id', 'task_description', 'user_id', 'project_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        // pass a single post object into the homepage template
        res.render('homepage', dbPostData[0]);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;