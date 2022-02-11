const { Task } = require('../models');

const taskData = [
    {
        task_name: 'Develop',
        task_description: 'start to exist, experience, or process',
        task_id: 1
    },
    {
        task_name: 'Cyber Security',
        task_description: 'protecting networks, devices, and data from unauthorized access or criminal use',
        task_id: 2
    },
];

const seedTask = () => Task.bulkCreate(taskData);

module.exports = seedTask;