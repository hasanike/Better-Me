//typeDefs for workout defined and mutations added

const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    workouts: [Workout]!
  }

  type Workout {
    _id: ID
    workoutName: String
    workoutDescription: String
    createdAt: String
    exercises: [Exercise]!
  }

  type Exercise {
    _id: ID
    exerciseName: String
    sets: Int
    reps: Int
    weight: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    workouts(username: String): [Workout]
    workout(workoutId: ID!): Workout
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(workoutName: String!, workoutDescription: String!): Workout
    addExercise(workoutId: ID!, exerciseName: String!, sets: Int!, reps: Int!, weight: String!): Exercise
    removeWorkout(workoutId: ID!): Workout
    removeExercise(workoutId: ID!, exerciseId: ID!): Workout
  }
`;

module.exports = typeDefs;
