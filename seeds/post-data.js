const { Post } = require('../models');

const postData = [
  {
    "title": "CSS-Tricks",
    "text": "CSS-Tricks is really about building websites and all that entails, mostly from a front-end perspective. They have staff writers and loads of guest authors, so the content you find there will be as diverse as they are.",
    "userId": 1,
  },
  {
    "title": "CodePen Blog",
    "text": "Read blogs, experiment and show your code instantly on the website (CodePen), you as well can learn how to code from examples of other developers.",
    "userId": 2,
  },
  {
    "title": "Creative Bloq",
    "text": "Creative Bloq may tout itself as an art and design blog, but it’s just as detailed as any other web developer blog. It’s awesome for discovering how grid systems, CSS animation, Big Data, etc all play roles in real-world web design.",
    "userId": 3,
  },
  {
    "title": "Smashing Magazine",
    "text": "On Smashing Magazine you can learn about coding, design, UX, mobile development and CMS frameworks. Visit this resource for level up your front end skills.",
    "userId": 4,
  },
  {
    "title": "Free Code Camp",
    "text": "One of the best resources to learn and improve your skills for free. They as well have an awesome channel on YouTube. Highly recommend.",
    "userId": 5,
  },
  {
    "title": "Envato Tuts+",
    "text": "Envato Tuts+, you can read their blog posts for free, in addition, if you subscribe you will get an option to watch tutorials and to use Envato library.",
    "userId": 1,
  },
  {
    "title": "Codrops",
    "text": "Codrops features blogs with topics ranging from UI design and page animations to image formatting and general JavaScript practices. It also includes a handy CSS reference, a web development experiment playground, and tutorials.",
    "userId": 3,
  }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;