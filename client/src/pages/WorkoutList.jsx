import React, { useEffect } from 'react'
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'
import { useQuery } from '@apollo/client'
import { QUERY_WORKOUTS } from '../utils/queries'
import { Link} from 'react-router-dom'


// Ported from the amazing codepen by Alexei Popkov.
// https://codepen.io/Reystleen/pen/oydqxz

const WorkoutList = () => {
    const { loading, data } = useQuery(QUERY_WORKOUTS)
    const workouts = data?.workouts || []
    useEffect(() => {
        console.log(workouts)
    })
    return (<Container>
        {/* Heads up! We apply there some custom styling, you usually will not need it. */}
        <style>
            {`
      html, body {
        background-color: #252839 !important;
      }

      p {
        align-content: center;
        background-color: #495285;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
        text-align: center;
      }

      p > span {
        opacity: 0.4;
        text-align: center;
      }
    }
    `}
        </style>



        <style>
            {`
.ui.grid.divided:not([class*="vertically divided"]) > .row > .column {
  box-shadow: -1px 0 0 0 #d4d4d4;
}

.ui[class*="vertically divided"].grid > .row:before {
  box-shadow: 0 -1px 0 0 rgba(212, 212, 212, 1.0);
}
`}
        </style>
        <Header as='h2' inverted textAlign='center'>
           Workouts
        </Header>
        <Grid columns={3} divided>
            <Grid.Row>
                {loading ? (
                    <div>Loading...</div>
                ) : (workouts?.map(workout => {
                    return (<Grid.Column><p><Link to={`/workouts/${workout._id}`}>{workout.workoutName}</Link></p></Grid.Column>)
                })

                )}
            </Grid.Row>
        </Grid>
    </Container>)
}

export default WorkoutList