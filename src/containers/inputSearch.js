import { connect } from 'react-redux';
import InputSearch from '../components/InputSearch';
import { inputSearchChange, inputSearchSubmit } from '../store/reducer';


// le container sert à récuperer la valeur depuis le state.
const mapStateToProps = state => ({
    //ici on veut une props appelé value qui renverra la propriété du state appelé value.
    value: state.value,
    loading: state.loading,

});

const mapDispatchToProps = dispatch => ({
    // Je crée un props onInputSearchChange
    onInputSearchChange: (value) => {
        // et je dispatch la value
        dispatch(inputSearchChange(value));
    },
    // Je crée un props onFormSubmit
    onFormSubmit: () => {
        // et je dispatch le submit
        dispatch(inputSearchSubmit());
    },
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(InputSearch);