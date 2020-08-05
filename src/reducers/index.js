// Combine Reducers
import { combineReducers } from 'redux';

// Importar reducers
import giphyReducer from './giphyReducer';

export default combineReducers({
    giphy: giphyReducer
});
