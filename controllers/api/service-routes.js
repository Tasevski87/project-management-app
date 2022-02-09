const router = require('express').Router();
const { Project, Service, User } = require('../../models')

router.get('/', (req, res) => {
    Service.findAll({
        include: [Project]
    }).then(dbServiceData => {
        if (!dbServiceData) {
            res.status(404).json({ message: 'No service found' });
            return;
        }
        res.json(dbServiceData);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});
// find one project by its `id` value
router.get('/:id', (req, res) => {
    Service.findOne({
        where: {
            id: req.params.id
        },


        include: [Project]


    }).then(service => res.json(service))
        .catch(err => res.status(500).json(err))
});


router.post('/', (req, res) => {
    Service.create(req.body)
        .then(service => res.json(service))
        .catch(err => res.status(500).json(err))
});

router.put('/:id', (req, res) => {

    Service.update()


});

router.delete('/:id', (req, res) => {

    Service.destroy({
        where: {

        }
    }).then(service => res.json(service))
        .catch(err => res.status(500).json(err))
});



module.exports = router;


