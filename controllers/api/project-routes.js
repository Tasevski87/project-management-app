const router = require('express').Router();
const { Project, Service } = require('../../models')

router.get('/', (req, res) => {
    Project.findAll({
        include: [Service]


    }).then(dbProjectData => res.json(dbProjectData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// find one project by its `id` value
router.get('/:id', (req, res) => {
    Project.findOne({
        where: {
            id: req.params.id
        },

        include: [Service]

    }).then(dbProjectData => {
        if (!dbProjectData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbProjectData);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/', (req, res) => {
    Project.create(req.body)
        .then(dbProjectData => res.json(dbProjectData))
        .catch(err => res.status(500).json(err))
});

router.put('/:id', (req, res) => {
    Project.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbProjectData => {
            if (!dbProjectData[0]) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbProjectData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

router.delete('/:id', (req, res) => {
    Project.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbProjectData => {
            if (!dbProjectData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbProjectData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
