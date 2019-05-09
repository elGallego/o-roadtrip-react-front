// Par default un middleware bloque l'intégralité des actions
// Ce que l'on veut c'est tout laissé passé et choisir les actions que nous ne voulons pas laissé passé.

// on va gérer des requetes du coup esoin d'axios
import axios from 'axios';

// on importe les actions à surveiller
import { INPUT_SEARCH_SUBMIT } from './reducer';

// Syntaxe du middleware minimum triple flechée
const ajaxMiddleware = store => next => (action) => {
    // switch pour examiner les actions et par default les laisser passer
    switch (action.type) {
        // dans le cas ou le type de l'action est le submit
        case INPUT_SEARCH_SUBMIT:
            // on laise passer l'action pour que le state change et faire la requete
            next(action);
            // url = 'test';
            // axios.get(url)
            //     .then()
            //     .catch()
        break;
        default:
            next(action);
            break;
    }
        
};

export default ajaxMiddleware;