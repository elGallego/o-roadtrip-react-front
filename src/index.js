import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// import du store qui fonctionne avec redux dans le reducer
import store from './store';

// import du css de semantic ui
import 'semantic-ui-css/semantic.min.css';

const RootComponent = () => (
    // ici on utilise le store de redux au lieu d'utiliser le state de react car on va pouvoir le controler et passé les inflrmation plus simplement
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<RootComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
