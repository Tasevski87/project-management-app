//create user seed data
const { User } = require("../models");

const userData = [
  {
    name: "Peter M",
    about: "distinctio culpa numquam amet officia omnis voluptatem odit ducimus",
    username: "alesmonde0",
    email: "nwestnedge0@cbc.ca",
    password: "password123",
  },
  {
    name: "Ralph P",
    about: "distinctio culpa numquam amet officia omnis voluptatem odit ducimus",
    username: "jwilloughway1",
    email: "rmebes1@sogou.com",
    password: "password123",
  },
  {
    name: "Sally F",
    about: "distinctio culpa numquam amet officia omnis voluptatem odit ducimus",
    username: "iboddam2",
    email: "cstoneman2@last.fm",
    password: "password123",
  },
  {
    name: "John M",
    about: "distinctio culpa numquam amet officia omnis voluptatem odit ducimus",
    username: "dstanmer3",
    email: "ihellier3@goo.ne.jp",
    password: "password123",
  },
  {
    name: "Charlie K",
    about: "distinctio culpa numquam amet officia omnis voluptatem odit ducimus",
    username: "djiri4",
    email: "gmidgley4@weather.com",
    password: "password123",
  },
  {
    name: "Dennis M",
    about: "distinctio culpa numquam amet officia omnis voluptatem odit ducimus",
    username: "msprague5",
    email: "larnout5@imdb.com",
    password: "password123",
  },
  {
    name: "Frank M",
    about: "distinctio culpa numquam amet officia omnis voluptatem odit ducimus",
    username: "mpergens6",
    email: "hnapleton6@feedburner.com",
    password: "password123",
  },
  {
    name: "Nathan L",
    about: "distinctio culpa numquam amet officia omnis voluptatem odit ducimus",
    username: "tpenniell7",
    email: "kperigo7@china.com.cn",
    password: "password123",
  },
  {
    name: "Sarah D",
    about: "distinctio culpa numquam amet officia omnis voluptatem odit ducimus",
    username: "msabbins8",
    email: "lmongain8@google.ru",
    password: "password123",
  },
  {
    name: "Nancy P",
    about: "distinctio culpa numquam amet officia omnis voluptatem odit ducimus",
    username: "jmacarthur9",
    email: "bsteen9@epa.gov",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
