const { Project } = require('../models');

const projectData = [

    
    {
        project_name: 'Test',
        project_id: 1
    },
    {
        project_name: 'Testing',
        project_id: 2
    },

];

const seedProject = () => Project.bulkCreate(projectData);

module.exports = seedProject;