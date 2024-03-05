import { gql } from "@apollo/client"

export const QUERY_WORKOUTS = gql`
query Query {
    workouts {
      _id
      createdAt
      workoutName
      workoutDescription
      exercises {
        _id
        name
        createdAt
        reps
        sets
        weight
      }
    }
  }
`