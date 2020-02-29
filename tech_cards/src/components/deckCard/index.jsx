import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import ReactIcon from '../../images/react-icon.png';

export default function CardExampleCard(props) {
  return (
    <Card
      image={ReactIcon}
      header='React'
      meta='Friend'
      description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    />
  );
}
