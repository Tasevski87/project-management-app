const seedProject = require('./project-seeds');
const seedService = require('./service-seeds');
//seed user

const sequelize = require('../config/connection');

const seedAll = async () => {


    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedProject();
    console.log('\n----- PROJECT SEEDED -----\n');

    await seedService();
    console.log('\n----- SERVICE SEEDED -----\n');

    process.exit(0);
};

seedAll();