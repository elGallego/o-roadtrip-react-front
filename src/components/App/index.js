import React, { useEffect } from 'react';
import axios from 'axios';

import Map from '../Map';
import WrapFav from '../WrapFav';

import './index.scss';

const App = () => {
    useEffect(()=> {
        axios.get('https://places.api.here.com/places/v1/discover/search?app_id=2JhxBimvjIWjT0b2gg2w&app_code=Cq-FoqMWZumjbZmgPczzzw&at=52.531,13.3843&q=Brandenburg+Gate&pretty')
            .then(console.log)
            .catch(console.log);
    });
    return (
        <div id="App">
            <Map />
            <WrapFav />
        </div>
    );
};      

export default App;