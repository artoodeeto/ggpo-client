import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root_reducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
let persistor = persistStore(store);
// return { store, persistor };
export { store, persistor };
// };

// export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
