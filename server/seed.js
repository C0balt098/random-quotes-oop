// server/seed.js
const {Quote, sequelize} = require("./models/Quote");

const seed = async () => {
  await sequelize.sync({force: true});

  await Quote.bulkCreate([
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      author: "Zig Ziglar",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "Act as if what you do makes a difference. It does.",
      author: "William James",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {text: "Everything you can imagine is real.", author: "Pablo Picasso"},
    {text: "Turn your wounds into wisdom.", author: "Oprah Winfrey"},
    {text: "Happiness depends upon ourselves.", author: "Aristotle"},
    {
      text: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {text: "Dream big and dare to fail.", author: "Norman Vaughan"},
    {
      text: "If opportunity doesn't knock, build a door.",
      author: "Milton Berle",
    },
    {
      text: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
    },
    {
      text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      author: "Roy T. Bennett",
    },
    {
      text: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis",
    },
  ]);

  console.log("✅ 20 quotes inserted successfully.");
  process.exit();
};

seed();
