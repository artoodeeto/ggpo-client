import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root_reducer';

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
