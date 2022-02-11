const seedProject = require('./project-seeds');
const seedService = require('./service-seeds');
const seedComment = require('./comment-seed');
//seed user

const sequelize = require('../config/connection');


const seedAll = async () => {


    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedProject();
    console.log('\n----- PROJECT SEEDED -----\n');

    await seedService();
    console.log('\n----- SERVICE SEEDED -----\n');

    await seedComment();
    console.log('\n----- COMMENT SEEDED -----\n');


    process.exit(0);
};

seedAll();