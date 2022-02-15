const seedUser = require("./user-seeds");
const seedProject = require("./project-seeds");
const seedTask = require("./task-seeds");
const seedComment = require("./comment-seeds");
const chalk = require("chalk")



const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log(chalk.green.bold("\n----- DATABASE SYNCED -----\n"));

  await seedUser();
  console.log(chalk.green.bold("\n----- USERS SEEDED -----\n"));

  await seedProject();
  console.log(chalk.green.bold("\n----- PROJECTS SEEDED -----\n"));

  await seedComment();
  console.log(chalk.green.bold("\n----- COMMENTS SEEDED -----\n"));

  await seedTask();
  console.log(chalk.green.bold("\n----- TASKS SEEDED -----\n"));

  process.exit(0);
};

seedAll();
