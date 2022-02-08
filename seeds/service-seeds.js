const { Service } = require('../models');

const serviceData = [
    {
        service_name: 'Develop',
        service_id: 1
    },
    {
        service_name: 'Cyber Security',
        service_id: 2
    },
];

const seedService = () => Service.bulkCreate(serviceData);

module.exports = seedService;