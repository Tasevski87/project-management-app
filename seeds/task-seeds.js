// create comment see data
const { Task } = require("../models");

const taskData = [
  {
    task_name: "Lorem ipsum dolor sit",
    task_description: "Nunc rhoncus dui vel sem.",
    user_id: 6,
    project_id: 1,
  },
  {
    task_name: "amet consectetur",
    task_description:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    user_id: 6,
    project_id: 8,
  },
  {
    task_name: "Nesciunt molestiae similique tenetur ",
    task_description: "Aliquam erat volutpat. In congue.",
    user_id: 3,
    project_id: 10,
  },
  {
    task_name: "quae sequi",
    task_description:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    user_id: 3,
    project_id: 18,
  },
  {
    task_name: "repudiandae nihil",
    task_description: "In hac habitasse platea dictumst.",
    user_id: 7,
    project_id: 5,
  },
  {
    task_name: "facere ratione ab ",
    task_description: "Vivamus vestibulum sagittis sapien.",
    user_id: 1,
    project_id: 20,
  },
  {
    task_name: "quia sint quidem minus",
    task_description:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    user_id: 6,
    project_id: 7,
  },
  {
    task_name: "adipisicing elit",
    task_description: "Sed vel enim sit amet nunc viverra dapibus.",
    user_id: 7,
    project_id: 4,
  },
  {
    task_name: "soluta alias",
    task_description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    user_id: 6,
    project_id: 12,
  }
];

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;
