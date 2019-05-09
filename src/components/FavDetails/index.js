import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react'

import './index.scss';

const FavDetails = () => (
  <div id="favDetails">
    <Card>
      <div id="presentation-fav">
        <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
        <Card.Content id="presentation">
          <Card.Header>Name of Place</Card.Header>
          <Card.Meta>Restaurant</Card.Meta>
          <Card.Description>Paris</Card.Description>
          <Card.Description>1 Rue Grande Armée</Card.Description>
        </Card.Content>
      </div>
      <Card.Content extra id="rate-fav">
        <div id="rates">
          <a>
              <Icon name='star' size='large' className="rates"/>Nb etoiles donné par l'API
          </a>
        </div>
        <div>
          <a><Icon name='heart' size='big' className="favourite"/></a>
        </div>        
      </Card.Content>
    </Card>
  </div>
  );


export default FavDetails;