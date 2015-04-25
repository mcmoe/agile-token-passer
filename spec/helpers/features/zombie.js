/* Set up the Zombie headless browser stack */
const Zombie = require('zombie');

Zombie.site = 'localhost:' + process.env.PORT;
