const { Comment } = require('../models');

const commentData = [
  {
    "comment_text": "This is comment number one",
    "userId": 1,
    "post_id": 1,
  },
  {
    "comment_text": "This is comment number two",
    "userId": 1,
    "post_id": 2,
  },
  {
    "comment_text": "This is comment number three",
    "userId": 2,
    "post_id": 1,
  },
  {
    "comment_text": "This is comment number four",
    "userId": 3,
    "post_id": 1,
  },
  {
    "comment_text": "This is comment number five",
    "userId": 4,
    "post_id": 1,
  },
  {
    "comment_text": "This is comment number six",
    "userId": 4,
    "post_id": 2,
  },
 ];

const seedComment= () => Comment.bulkCreate(commentData);

module.exports = seedComment;


