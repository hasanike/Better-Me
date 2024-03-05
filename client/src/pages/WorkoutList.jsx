import React from 'react'
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'

// Ported from the amazing codepen by Alexei Popkov.
// https://codepen.io/Reystleen/pen/oydqxz

const AnotherGridLayout = () => (
  <Container>
    {/* Heads up! We apply there some custom styling, you usually will not need it. */}
    <style>
      {`
      html, body {
        background-color: black
        !important;
      }

      p {
        align-content: center;
        background-color: gray;
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


    <Header as='h2' inverted textAlign='center'>
      Excercise List
    </Header>
    <Grid celled='internally' columns={3}>
      <Grid.Row>
        <Grid.Column>
          <p>Plank </p>
        </Grid.Column>
        <Grid.Column>
          <p> Squat </p>
        </Grid.Column>
        <Grid.Column>
          <p> Lunge </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p>Ab Crunch</p>
        </Grid.Column>
        <Grid.Column>
          <p>Pigeon</p>
        </Grid.Column>
        <Grid.Column>
          <p> Push-up </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

      </Container>
)

export default AnotherGridLayout