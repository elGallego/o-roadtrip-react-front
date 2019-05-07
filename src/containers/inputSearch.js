import { connect } from 'react-redux';
import InputSearch from '../components/InputSearch';
import { inputSearchChange } from '../store/reducer';


// le container sert à récuperer la valeur depuis le state.
const mapStateToProps = state => ({
    //ici on veut une props appelé inputText qui renverra la propriété du state appelé value.
    inputText: state.value,

});

const mapDispatchToProps = dispatch => ({
    onInputSearchChange: (value) => {
        dispatch(inputSearchChange(value));
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(InputSearch);