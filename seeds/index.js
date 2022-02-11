const seedUser = require("./user-seeds");
const seedProject = require("./project-seeds");
const seedTask = require("./task-seeds");
const seedComment = require("./comment-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUser();
  console.log("\n----- USERS SEEDED -----\n");

  await seedProject();
  console.log("\n----- PROJECTS SEEDED -----\n");

  await seedComment();
  console.log("\n----- COMMENTS SEEDED -----\n");

  await seedTask();
  console.log("\n----- TASKS SEEDED -----\n");

  process.exit(0);
};

seedAll();