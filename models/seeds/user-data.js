const { User } = require('../models');

const userData = [
  {
    "username": "Alpha",
    "password": "password12345"
  },
  {
    "username": "Beta",
    "password": "12345678"
  },
  {
    "username": "Charlie",
    "password": "password12345"
  },
  {
    "username": "Delta",
    "password": "password123456"
  },
  {
    "username": "Echo",
    "password": "password1234"
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;