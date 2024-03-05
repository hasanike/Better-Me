import React from 'react'
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'

// Ported from the amazing codepen by Alexei Popkov.
// https://codepen.io/Reystleen/pen/oydqxz

const WorkoutList = () => (
  <Container>
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
Divided
</Header>
<Grid columns={3} divided>
<Grid.Row>
  <Grid.Column>
    <p />
  </Grid.Column>
  <Grid.Column>
    <p />
  </Grid.Column>
  <Grid.Column>
    <p />
  </Grid.Column>
</Grid.Row>
<Grid.Row>
  <Grid.Column>
    <p />
  </Grid.Column>
  <Grid.Column>
    <p />
  </Grid.Column>
  <Grid.Column>
    <p />
  </Grid.Column>
</Grid.Row>
</Grid>
</Container>
)

export default WorkoutList