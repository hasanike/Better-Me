const db = require('../config/connection');
const { User, Workout } = require('../models');
const userSeeds = require('./userSeeds.json');
const workoutSeeds = require('./workoutSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Workout', 'workouts');

    await cleanDB('User', 'users');

    const users = await User.create(userSeeds);

    for (let i = 0; i < workoutSeeds.length; i++) {
      const { _id } = await Workout.create(workoutSeeds[i]);
      const user = await User.findOneAndUpdate(
        { _id: users[Math.floor(Math.random() * users.length)]._id},
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
