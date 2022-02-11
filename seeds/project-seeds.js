const { Project } = require("../models");

const projectData = [
  {
    project_name: "Donec posuere metus vitae ipsum.",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maiores molestiae modi enim necessitatibus eveniet sunt quidem, voluptatibus quae a officia, debitis excepturi magnam dolorum nesciunt molestias dolores ratione quam.",
    user_id: 10,
  },
  {
    project_name: "Morbi non quam nec dui luctus rutrum.",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic, distinctio culpa numquam amet officia omnis voluptatem odit ducimus? Doloremque neque rerum vero similique mollitia itaque optio quod error culpa?",
    user_id: 8,
  },
  {
    project_name:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic, distinctio culpa numquam amet officia omnis voluptatem odit ducimus? Doloremque neque rerum vero similique mollitia itaque optio quod error culpa?",
    user_id: 1,
  },
  {
    project_name: "Nunc purus.",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maiores molestiae modi enim necessitatibus eveniet sunt quidem, voluptatibus quae a officia, debitis excepturi magnam dolorum nesciunt molestias dolores ratione quam.",
    user_id: 4,
  },
  {
    project_name: "Pellentesque eget nunc.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid suscipit id et dolorem officiis veniam autem ea nesciunt, commodi tempore, iure iusto ratione veritatis ducimus pariatur maiores est sunt!",
    user_id: 7,
  },
  {
    project_name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic, distinctio culpa numquam amet officia omnis voluptatem odit ducimus? Doloremque neque rerum vero similique mollitia itaque optio quod error culpa?",
    user_id: 4,
  },
  {
    project_name: "In hac habitasse platea dictumst.",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic, distinctio culpa numquam amet officia omnis voluptatem odit ducimus? Doloremque neque rerum vero similique mollitia itaque optio quod error culpa?",
    user_id: 1,
  },
  {
    project_name: "Morbi non quam nec dui luctus rutrum.",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maiores molestiae modi enim necessitatibus eveniet sunt quidem, voluptatibus quae a officia, debitis excepturi magnam dolorum nesciunt molestias dolores ratione quam.",
    user_id: 1,
  },
  {
    project_name: "Duis ac nibh.",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maiores molestiae modi enim necessitatibus eveniet sunt quidem, voluptatibus quae a officia, debitis excepturi magnam dolorum nesciunt molestias dolores ratione quam.",
    user_id: 9,
  },
  {
    project_name: "Curabitur at ipsum ac tellus semper interdum.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid suscipit id et dolorem officiis veniam autem ea nesciunt, commodi tempore, iure iusto ratione veritatis ducimus pariatur maiores est sunt!",
    user_id: 5,
  },
  {
    project_name: "In hac habitasse platea dictumst.",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic, distinctio culpa numquam amet officia omnis voluptatem odit ducimus? Doloremque neque rerum vero similique mollitia itaque optio quod error culpa?",
    user_id: 3,
  },
  {
    project_name:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic, distinctio culpa numquam amet officia omnis voluptatem odit ducimus? Doloremque neque rerum vero similique mollitia itaque optio quod error culpa?",
    user_id: 10,
  },
  {
    project_name: "Donec dapibus.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid suscipit id et dolorem officiis veniam autem ea nesciunt, commodi tempore, iure iusto ratione veritatis ducimus pariatur maiores est sunt!",
    user_id: 8,
  },
  {
    project_name: "Nulla tellus.",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maiores molestiae modi enim necessitatibus eveniet sunt quidem, voluptatibus quae a officia, debitis excepturi magnam dolorum nesciunt molestias dolores ratione quam.",
    user_id: 3,
  },
  {
    project_name:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid suscipit id et dolorem officiis veniam autem ea nesciunt, commodi tempore, iure iusto ratione veritatis ducimus pariatur maiores est sunt!",
    user_id: 3,
  },
  {
    project_name:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid suscipit id et dolorem officiis veniam autem ea nesciunt, commodi tempore, iure iusto ratione veritatis ducimus pariatur maiores est sunt!",
    user_id: 7,
  },
  {
    project_name: "In hac habitasse platea dictumst.",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic, distinctio culpa numquam amet officia omnis voluptatem odit ducimus? Doloremque neque rerum vero similique mollitia itaque optio quod error culpa?",
    user_id: 6,
  },
  {
    project_name: "Etiam justo.",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic, distinctio culpa numquam amet officia omnis voluptatem odit ducimus? Doloremque neque rerum vero similique mollitia itaque optio quod error culpa?",
    user_id: 4,
  },
  {
    project_name: "Nulla ut erat id mauris vulputate elementum.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid suscipit id et dolorem officiis veniam autem ea nesciunt, commodi tempore, iure iusto ratione veritatis ducimus pariatur maiores est sunt!",
    user_id: 6,
  },
  {
    project_name:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maiores molestiae modi enim necessitatibus eveniet sunt quidem, voluptatibus quae a officia, debitis excepturi magnam dolorum nesciunt molestias dolores ratione quam.",
    user_id: 7,
  },
];

const seedPosts = () => Project.bulkCreate(projectData);

module.exports = seedPosts;
