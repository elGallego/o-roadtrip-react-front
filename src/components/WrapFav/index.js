import React from 'react';
// import PropTypes from 'prop-types';
import FavDetails from '../FavDetails';
import FavClose from '../FavClose';
import CardRequest from '../CardRequest';

import './index.scss';

const WrapFav = () => (
  <div id="wrapFav">
    <h2>Vos favoris</h2>
    <FavDetails />
    <FavClose />
    <h2>Résultats de votre recherche</h2>
    <CardRequest />
  </div>
  );


export default WrapFav;