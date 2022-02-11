const router = require('express').Router();
const { Project, Task, User } = require('../../models')

router.get('/', (req, res) => {
    Task.findAll({
        include: [Project]
    }).then(dbTaskData => {
        if (!dbTaskData) {
            res.status(404).json({ message: 'No task found' });
            return;
        }
        res.json(dbTaskData);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});
// find one project by its `id` value
router.get('/:id', (req, res) => {
    Task.findOne({
        where: {
            id: req.params.id
        },


        include: [Project]


    }).then(task => res.json(task))
        .catch(err => res.status(500).json(err))
});


router.post('/', (req, res) => {
    Task.create(req.body)
        .then(task => res.json(task))
        .catch(err => res.status(500).json(err))
});

router.put('/:id', (req, res) => {

    Task.update()


});

router.delete('/:id', (req, res) => {

    Task.destroy({
        where: {

        }
    }).then(task => res.json(task))
        .catch(err => res.status(500).json(err))
});



module.exports = router;


