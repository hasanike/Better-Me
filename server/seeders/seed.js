const db = require('../config/connection');
const { User, Excercise } = require('../models');
const userSeeds = require('./userSeeds.json');
const workoutseeds = require('./workoutseeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Workout', 'workouts');

    await cleanDB('User', 'users');

    await User.create(userSeeds);

    for (let i = 0; i < workoutseeds.length; i++) {
      const { _id, thoughtAuthor } = await Workout.create(workoutseeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            workouts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
