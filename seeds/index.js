const sequelize = require('../config/connection');
const seedUser = require('./user-data');
const seedPost = require('./post-data');
// const seedComment = require('./comment-data');
// const postCommentData = require('./post-comment-data');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPost();
  console.log('\n----- POSTS SEEDED -----\n');

  // await seedComment();
  // console.log('\n----- COMMENT SEEDED -----\n');

  // await postCommentData();
  // console.log('\n-----  SEEDED -----\n');

  process.exit(0);
};

seedAll();