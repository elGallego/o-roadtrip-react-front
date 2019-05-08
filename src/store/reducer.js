// le state est un objet et ici on initialise ce qu'il se passe au départ de l'application
const initialState = {
    value: '',
    loading: false,
}

// Types d'action que l'on va avoir besoin pour notre application
const INPUT_SEARCH_CHANGE = 'INPUT_SEARCH_CHANGE';
const INPUT_SEARCH_SUBMIT = 'INPUT_SEARCH_SUBMIT';

// le plus petit reducer que l'on peut avoir
// le reducer est une fonction qui prend en paramètre le state et selon l'action et nous renvoi l'etat du state.
// reducer est une fonction qui renvoi un objet
const reducer = (state= initialState, action= {}) => {
      // ici on regarde si notre reducer recoit notre type d'action donc nous y listons tout les cas possible avec les types d'actions 
    switch (action.type) {
      case INPUT_SEARCH_SUBMIT:
        return {
          ...state,
          loading: true,
        }
      case INPUT_SEARCH_CHANGE: 
        return {
          // on récupère tout le state que l'on spread pour TOUT récupérer et on ajoute au state que la valeur de l'input
          ...state,
          value: action.value,
        }
      default: 
        return state;
    }
};

// Actions creators à exporter pour le container pour pouvoir dispatcher l'action
export const inputSearchChange = value => ({
  type: INPUT_SEARCH_CHANGE,
  value,
});

export const inputSearchSubmit = () => ({
  type: INPUT_SEARCH_SUBMIT,
});

export default reducer; 