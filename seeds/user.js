//create user seed
const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: 'fake name',
        email: 'test@work.com',
        password: 'passthis'
    }
];

const seedService = () => Service.bulkCreate(userData);

module.exports = seedService;