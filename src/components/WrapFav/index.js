import React from 'react';
// import PropTypes from 'prop-types';
import FavDetails from '../FavDetails';
import FavClose from '../FavClose';

import './index.scss';

const WrapFav = () => (
  <div id="wrapFav">
    <h2>Vos favoris</h2>
    <FavDetails />
    <FavClose />
  </div>
  );


export default WrapFav;