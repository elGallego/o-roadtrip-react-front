import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react'

import './index.scss';

const FavClose = () => (
  <div id="favClose">
    <Card>
      <Card.Content>
        <Card.Header>Name of Place</Card.Header>
            <Card.Description>Paris</Card.Description>
            <Card.Description>1 Rue Grande Armée</Card.Description>
      </Card.Content>
      <Card.Meta>Restaurant</Card.Meta>
      <Card.Content extra id="rate-fav">
        <div>
          <a><Icon name='heart' size='big' className="favouriteClose"/></a>
        </div>        
      </Card.Content>
    </Card>
  </div>
  );


export default FavClose;