const router = require('express').Router();
const { Project, Service } = require('../../models')

router.get('/', (req, res) => {
    Project.findAll({
        include: [Service]


    }).then(item => res.json(item))
        .catch(err => res.status(500).json(err))
});

// find one project by its `id` value
router.get('/:id', (req, res) => {
    Project.findOne({
        where: {
            id: req.params.id
        },

        include: [Service]
        
    }).then(item => res.json(item))
        .catch(err => res.status(500).json(err))
});


router.post('/', (req, res) => {
    Project.create(req.body)
        .then(item => res.json(item))
        .catch(err => res.status(500).json(err))
});

router.put('/:id', (req, res) => {
    Project.update(req.body, {
        where: {
            id: req.params.id
        }
    })  .then(item => res.json(item))
        .catch(err => res.status(500).json(err))

});

router.delete('/:id', (req, res) => {
    Project.destroy({
        where: {
            id: req.params.id
        }
    })  .then(item => res.json(item))
        .catch(err => res.status(500).json(err))
});



module.exports = router;
