import React from 'react';
import { Grid, Card } from 'semantic-ui-react';

import JavascriptIcon from '../../images/javascript-icon.png';
import ReactIcon from '../../images/react-icon.png';

export default function Home() {
  return (
    <Grid padded textAlign='center' verticalAlign='middle'>
      <Grid.Row>
        <h3>Escolha o que quer estudar hoje:</h3>
      </Grid.Row>
      <Grid.Row>
        <Card.Group>
          <Card
            image={JavascriptIcon}
            header='Javascript questions for interviews'
            href='/deck/javascript'
          />
          <Card
            image={ReactIcon}
            header='React questions for interviews'
            href='/deck/react'
          />
        </Card.Group>
      </Grid.Row>
    </Grid>
  );
}